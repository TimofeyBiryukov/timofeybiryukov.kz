# Hardware, electronics and firmware

This is what makes the portfolio different from a developer's page. Every project
here needs photos; the vault already has many (see
[06-open-questions.md](06-open-questions.md)).

## Marine keyboard — own PCB, firmware and case (2024–2026)

A full custom tenkeyless mechanical keyboard, designed end to end.

- **Electronics.** PCB designed in KiCad (30 commits): RP2040 controller, 6x17
  diode matrix, 86 hot-swap keys, 96 addressable RGB LEDs (per-key and
  underglow), level shifter, USB-C. Boards ordered from JLCPCB in May 2024.
- **Problems solved along the way.** Wrong LED footprint that swapped pins,
  fixed on the board; LED power budget checked against the USB limit; USB-C
  connector swapped for one that can be hand-soldered; a V1.1 respin for the
  underglow chain and component values.
- **Firmware.** QMK, 60 commits, 23 releases built by GitHub Actions (latest
  March 2026). Caps Lock switches input language, media keys, autocorrect,
  separate Mac and Linux modes.
- **Case.** Layered acrylic sandwich (bottom, switch, top, closing and stabilizer
  layers), drawn in CAD and laser cut.
- **Spin-offs.** A low-profile 80% "Light" variant, an RP2040 board of his own
  (`RP2040-TB-Edition`), a matching desk mat design.
- **State.** In daily use, as far as the firmware releases show; confirm.

## HitBox — leverless arcade controller (2023–2024)

A button-only fighting-game controller built for Tekken.

- Started on an Arduino Pro Micro, rebuilt on a Raspberry Pi Pico with GP2040-CE
  firmware; 18 buttons, optional stick connector, I2C display.
- Wooden frame with laser-cut acrylic plates, threaded rivets, a hand-cut USB-C
  mount. Several prototypes, "semi final" build in May 2024.
- His own PCB in two revisions (KiCad, `Hitbox_Delta`).
- Planned to open-source the design (KiCad, CAD exports, instructions); not done.

## Wi-Fi mains switch (2023–2024)

A 220 V switch controlled from Home Assistant.

- ESP board, relay, a mains-to-3.3 V module, and proper protection: slow-blow
  fuse, varistor, suppression capacitor. Physical button as a backup.
- ESPHome firmware; first prototype built and installed on a bedroom light in
  February 2024.
- An honest detail for the write-up: the relay leaked enough to leave the lamp
  glowing dimly, and the notes work through the causes.

## Zigbee button pusher (2026)

Firmware for an ESP32-H2 that joins a Zigbee network as a switch and "presses" a
physical button on another device (a doorbell or intercom) through an
optocoupler. Written in C on ESP-IDF, with the pin choice and isolation circuit
documented. Whether it is installed is not recorded.

## Smart home (2023–now)

Home Assistant on a Raspberry Pi in Docker, configuration in git.

- About 6,700 lines of YAML: baby-care tracking and dashboards, house modes,
  bedroom humidity control, robot vacuum, security, TV and appliance watchdogs.
- One announcement script that every notification goes through, so night mode and
  baby-sleep mode silence the whole house.
- Voice control through a smart speaker; Telegram bot for the house.
- A diagnosed network fault: a camera that ignored network discovery requests,
  fixed with a small helper container.
- A Zigbee test rig built before rolling devices out at home.

## Network and homelab

- Router automation with Ansible (`magic_router`), travel router setup,
  WireGuard, tunnelling experiments.
- Local LLM server on his own GPU.
- Workstation moved from Windows to Linux in 2026, with a written snapshot and
  rollback procedure.

## Other builds and repairs

- **FPV quadcopter (2022).** Built from parts: frame, ESC, flight controller,
  video transmitter, receiver; crash analysis from flight footage.
- **Switch Lite modchip (2026).** RP2040 modchip installed with a shell swap;
  fine-pitch soldering that worked and that he plans to repeat.
- **Repairs.** A lamp fixed by finding a wrong-value capacitor; power bank and
  cordless tool battery rebuilds.
- **Ideas on paper only** (leave out): OBD car monitor, Bluetooth audio splitter,
  wireless charger cooling, fume extractor.

## Tools he works with

KiCad, Fusion 360, laser-cut acrylic via DXF export, JLCPCB fabrication, hot-air
and iron soldering, 3D printing, QMK, ESP-IDF, ESPHome, Arduino, Raspberry Pi
Pico, RP2040, ESP32 and ESP8266.
