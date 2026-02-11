Here is a clean, professional README.md for your project.

You can copy this into a file named:

README.md

🎹 DIY MIDI Controller (Raspberry Pi Pico)

A fully functional 64-key USB MIDI controller built using Raspberry Pi Pico, CircuitPython, and an 8×8 keyboard matrix architecture.

This project demonstrates how to design, wire, and program a custom MIDI controller compatible with major DAWs.

📌 Project Overview

This DIY MIDI controller:

Uses an 8×8 keyboard matrix (64 keys)

Implements matrix scanning with diode protection

Sends USB MIDI messages

Works with DAWs like:

FL Studio

Ableton Live

Logic Pro

GarageBand

Includes a web-based project documentation interface

Features an animated MIDI visualizer (Canvas-based)

🧰 Hardware Requirements
Component	Description
Raspberry Pi Pico	RP2040 microcontroller
64 Keys (8×8 Matrix)	Reused piano PCB or custom matrix
IN4148 Diodes	Prevent ghosting
Jumper Wires	Row & column connections
USB Cable	Power + MIDI data
Enclosure	Optional cabinet
🔌 Keyboard Matrix Design

The 64 keys are arranged as:

8 Rows × 8 Columns


Each key press connects a row and column.

Diodes prevent ghosting when multiple keys are pressed simultaneously.

💻 Software Stack
Microcontroller Side

CircuitPython

adafruit_midi

USB MIDI protocol

Web Interface

HTML5

CSS3 (custom styling)

Vanilla JavaScript

Canvas API (MIDI animation)

🧠 Key Concepts
1️⃣ Matrix Scanning
def scan_matrix():
    pressed = []
    for r, row in enumerate(row_pins):
        row.value = True
        for c, col in enumerate(col_pins):
            if col.value:
                pressed.append(r * 8 + c)
        row.value = False
    return pressed


Efficient scanning minimizes GPIO usage.

2️⃣ MIDI Output
if now and not prev:
    midi.send(NoteOn(note, 100))
elif not now and prev:
    midi.send(NoteOff(note, 0))


Sends standard USB MIDI messages.

🎨 Web Visual Interface

The documentation site includes:

Animated MIDI bar visualizer

Tabbed code viewer

Responsive layout

Dark theme UI

Canvas animation simulates velocity and note triggering.

📁 Project Structure
project-folder/
│
├── index.html
├── styles.css
├── README.md
└── code.py   (CircuitPython firmware)

🚀 How to Run the Web Interface

Download or clone the project

Ensure files are in same directory:

index.html
styles.css


Open index.html in your browser

No frameworks required.

🎹 How to Run on Raspberry Pi Pico

Install CircuitPython on Pico

Copy required libraries:

adafruit_midi

Upload code.py

Connect via USB

Open your DAW

Select "USB MIDI Device"

⚡ Features

64-Key Matrix

Low Latency

DAW Compatible

Expandable Firmware

Educational Electronics Project

Animated MIDI Visual Feedback

📈 Future Improvements

Velocity sensitivity

OLED display

Knobs & sliders (CC control)

Web MIDI real-time input

Piano roll visualization

MIDI recording playback

📚 Educational Value

This project teaches:

Embedded systems

GPIO matrix design

USB MIDI protocol

CircuitPython programming

Web UI development

Canvas animation

📜 License

Open-source educational project.
Free to modify and expand.

👨‍💻 Author

DIY MIDI Controller Project
Built for learning and experimentation.
