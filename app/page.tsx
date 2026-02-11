'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const tabs = document.querySelectorAll('.tab')
    const contents = document.querySelectorAll('.tab-content')

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'))
        contents.forEach(c => c.classList.remove('active'))

        tab.classList.add('active')
        const tabElement = tab as HTMLElement
        const contentElement = document.querySelector(
          `[data-content="${tabElement.dataset.tab}"]`
        )
        if (contentElement) {
          contentElement.classList.add('active')
        }
      })
    })

    // Canvas animation
    const canvas = document.getElementById('midiCanvas') as HTMLCanvasElement
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        let bars: Array<{ height: number; velocity: number }> = []
        const BAR_COUNT = 32

        function resizeCanvas() {
          canvas.width = canvas.offsetWidth
          canvas.height = canvas.offsetHeight
        }
        resizeCanvas()

        // Initialize bars
        for (let i = 0; i < BAR_COUNT; i++) {
          bars.push({
            height: 0,
            velocity: 0,
          })
        }

        function triggerNote(index: number, velocity = Math.random()) {
          if (bars[index]) {
            bars[index].velocity = velocity
            bars[index].height = velocity * canvas.height
          }
        }

        function animate() {
          if (!ctx) return
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          const barWidth = canvas.width / BAR_COUNT

          bars.forEach((bar, i) => {
            bar.height *= 0.92

            const x = i * barWidth
            const y = canvas.height - bar.height

            const gradient = ctx.createLinearGradient(0, y, 0, canvas.height)
            gradient.addColorStop(0, '#8b5cf6')
            gradient.addColorStop(1, '#4c1d95')

            ctx.fillStyle = gradient
            ctx.fillRect(x + 4, y, barWidth - 8, bar.height)
          })

          requestAnimationFrame(animate)
        }
        animate()

        // Simulate random MIDI input
        const interval = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * BAR_COUNT)
          triggerNote(randomIndex, Math.random())
        }, 150)

        window.addEventListener('resize', resizeCanvas)

        return () => {
          clearInterval(interval)
          window.removeEventListener('resize', resizeCanvas)
        }
      }
    }
  }, [])

  return (
    <main className="main">
      {/* ================= HEADER ================= */}
      <header className="header">
        <nav className="nav">
          <div className="logo">DIY PROJECT</div>

          <div className="nav-links">
            <a href="#overview">About</a>
            <a href="#hardware">Hardware</a>
            <a href="#software">Software</a>
            <a href="#features">Features</a>
          </div>

          <button className="btn-primary">Get Started</button>
        </nav>
      </header>

      <section id="visualizer">
        <h2>MIDI Visualizer</h2>
        <canvas id="midiCanvas"></canvas>
      </section>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Build Your Own <span className="accent">MIDI Controller</span>
            </h1>

            <p>
              A comprehensive guide to creating a functional MIDI keyboard
              controller using Raspberry Pi Pico, CircuitPython, and keyboard
              matrix architecture.
            </p>

            <div className="hero-buttons">
              <a href="#hardware" className="btn-primary">
                Learn Hardware
              </a>
              <a href="#software" className="btn-outline">
                View Code
              </a>
            </div>

            <div className="stats">
              <div>
                <strong>64</strong>
                <span>Keys</span>
              </div>
              <div>
                <strong>8×8</strong>
                <span>Matrix</span>
              </div>
              <div>
                <strong>DAW</strong>
                <span>Compatible</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div>
              <span>Project Type</span>
              <strong>Educational Electronics</strong>
            </div>
            <div>
              <span>Microcontroller</span>
              <strong>Raspberry Pi Pico</strong>
            </div>
            <div>
              <span>Programming</span>
              <strong>CircuitPython</strong>
            </div>
            <div>
              <span>Interface</span>
              <strong>USB MIDI</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section id="overview" className="section">
        <div className="card large">
          <h2>What is a MIDI Controller?</h2>

          <p>
            A MIDI (Musical Instrument Digital Interface) keyboard is a
            controller that allows you to play and record music on your
            computer&apos;s DAW or other MIDI-compatible devices.
          </p>

          <p>
            This project demonstrates how to build a fully functional 64-key
            MIDI controller from scratch using open-source CircuitPython.
          </p>

          <div className="grid-2">
            <div>
              <h3>Keyboard Matrix Design</h3>
              <p>Efficient 8×8 scanning with diode protection.</p>
            </div>
            <div>
              <h3>USB MIDI Protocol</h3>
              <p>Compatible with FL Studio, Ableton, Logic Pro.</p>
            </div>
            <div>
              <h3>CircuitPython Code</h3>
              <p>Readable and expandable Python implementation.</p>
            </div>
            <div>
              <h3>Open Source</h3>
              <p>Fully documented and customizable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HARDWARE ================= */}
      <section id="hardware" className="section">
        <h2>Hardware Components</h2>

        <div className="grid-3">
          <div className="card">
            <h3>Microcontroller</h3>
            <p className="accent">Raspberry Pi Pico</p>
            <p>RP2040, dual ARM Cortex-M0+, 264KB RAM</p>
          </div>

          <div className="card">
            <h3>Keys & Structure</h3>
            <p className="accent">Old Piano PCB</p>
            <p>64-key matrix from repurposed piano</p>
          </div>

          <div className="card">
            <h3>Power & Data</h3>
            <p className="accent">USB Cable</p>
            <p>USB for power and MIDI data</p>
          </div>

          <div className="card">
            <h3>Diodes</h3>
            <p className="accent">IN4148 Diodes</p>
            <p>Prevents ghosting in matrix</p>
          </div>

          <div className="card">
            <h3>Connections</h3>
            <p className="accent">Jumper Wires</p>
            <p>Connect rows and columns</p>
          </div>

          <div className="card">
            <h3>Enclosure</h3>
            <p className="accent">Digital Piano Cabinet</p>
            <p>Professional housing</p>
          </div>
        </div>
      </section>

      {/* ================= SOFTWARE ================= */}
      <section id="software" className="section">
        <h2>Software & Code</h2>

        {/* TABS */}
        <div className="tabs">
          <button className="tab active" data-tab="overview">
            Key Concepts
          </button>
          <button className="tab" data-tab="matrix">
            Matrix Scanning
          </button>
          <button className="tab" data-tab="midi">
            MIDI Output
          </button>
        </div>

        <div className="tab-panel">
          {/* OVERVIEW TAB */}
          <div className="tab-content active" data-content="overview">
            <pre>{`import board
import usb_midi
from adafruit_midi import MIDI
from adafruit_midi.note_on import NoteOn
from adafruit_midi.note_off import NoteOff

FIRST_NOTE = 36
DEBOUNCE_DELAY = 0.01`}</pre>
          </div>

          {/* MATRIX TAB */}
          <div className="tab-content" data-content="matrix">
            <pre>{`def scan_matrix():
    pressed = []
    for r, row in enumerate(row_pins):
        row.value = True
        time.sleep(0.0001)
        for c, col in enumerate(col_pins):
            if col.value:
                pressed.append(r * 8 + c)
        row.value = False
    return pressed`}</pre>
          </div>

          {/* MIDI TAB */}
          <div className="tab-content" data-content="midi">
            <pre>{`for i in range(64):
    note = FIRST_NOTE + i
    now = (i in current)
    prev = key_states[i]

    if now and not prev:
        midi.send(NoteOn(note, 100))
        key_states[i] = True
    elif not now and prev:
        midi.send(NoteOff(note, 0))
        key_states[i] = False`}</pre>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="section">
        <h2>Features & Capabilities</h2>

        <div className="grid-3">
          <div className="card">DAW Compatible</div>
          <div className="card">Low Latency</div>
          <div className="card">Customizable</div>
          <div className="card">Record & Perform</div>
          <div className="card">Unlimited Sounds</div>
          <div className="card">Educational</div>
        </div>
      </section>

      <footer className="footer">
        © 2024 DIY MIDI Controller Project
      </footer>
    </main>
  )
}
