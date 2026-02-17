<div align="center">
  <img src="docs/public/favicon.svg" alt="NAIIVE Logo" width="120" />
</div>

# NAIIVE

<div align="center">
  <p>
    <strong>Experimental node-based visualization studio built with Swift & Metal.</strong><br>
    Exploring real-time molecular rendering across macOS, visionOS, and iPadOS.
  </p>

  <a href="https://github.com/sponsors/zrzrv5">
    <img src="https://img.shields.io/badge/Sponsor-Early%20Access-pink?style=for-the-badge&logo=github-sponsors" alt="Sponsor" />
  </a>
  <img src="https://img.shields.io/badge/Platform-macOS%20%7C%20visionOS%20%20%7C%20iOS-lightgrey?style=for-the-badge&logo=apple" alt="Platform" />
  <br/>
  <img src="https://img.shields.io/badge/Built%20With-Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white" alt="Swift" />
  <img src="https://img.shields.io/badge/Built%20With-Metal-000000?style=for-the-badge&logo=apple&logoColor=white" alt="Metal" />

</div>

## Introduction

**NAIIVE**  is an experimental scientific renderer designed for the Apple ecosystem. 

> **Status:** 
> - Make it work 👈 we are here
> - Make it good
> - Make it fast

---

## 📍 About this Repository

This public repository serves as the **Community Hub** for NAIIVE, use this space to:

* 🐛 **Report Bugs** & track known issues.
* 💡 **Request Features** or support for new file formats.
* 💬 **Ask Questions** and discuss workflows in [Discussions](../../discussions).
* 📄 **Read Documentation** (soon).


---

## Access & Philosophy

**NAIIVE is completely free to use.**

<div align="center">
  <img src="https://img.shields.io/badge/Price-Free-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Ads-None-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Tracking-Zero-green?style=for-the-badge" />
</div>


* **No In-App Purchases**, **No Subscriptions**.
* **No Ads**, **No Tracking**, **No Internet Connection required**.

> ✈️ **TestFlight Public Beta:** The project is currently in active early development. You can try the latest build on [TestFlight](https://testflight.apple.com/join/VrYnN9nE).

<!-- ### So, how is this sustainable?

🤷  -->

<!-- **NAIIVE operates on a Sponsorware model.**

While the *Application* is free for everyone, the **Source Code** is available exclusively to Sponsors. This ensures the project's sustainability while keeping the tool free for scientists and students.

| Feature | Public (This Repo) | Insiders (Sponsors) |
| :--- | :---: | :---: |
| **Documentation** | ✅ | ✅ |
| **Issue Tracking** | ✅ | ✅ |
| **Nightly Builds (.app)** | ✅ (via TestFlight) | **✅ (Direct Download)** |
| **Core Source Code** | ❌ | **✅ (Access)** | -->

<!-- ### [💖 Become a Sponsor to access the Code](https://github.com/sponsors/zrzrv5) -->

## Gallery

*(Coming soon)*

## Supported Formats

NAIIVE currently supports the following formats commonly used in my research workflow:

* **LAMMPS**: `.dump` (supports `.gz` compression)
* **DeepMD**: `deepmd/npy` and `deepmd/raw`
* **GAMESS**: `.inp` (Input) and log output files
* **VASP**: `POSCAR`, `OUTCAR` (plain text), and `CHGCAR`
* **XYZ**: `.xyz` and `.extxyz`

### 🚧 Planned Support
* **LAMMPS**: `data` files and thermodynamic logs
* **Common Formats**: `.cif`, `.cfg`, `.pdb`
* **Mesh**: `.stl`, `.obj`

## Rendering Objects

NAIIVE currently implements these primitives for  visualization:

* **0D** :
  - `Particle` via sphere imposters
* **1D** :
  - `Cylinder`, `Arrow` via cylinder imposters
* **2D** :
  - `Text` Full Unicode support (e.g., 中文, ⚛️) via CoreText
* **3D** :
  - `Mesh`: Standard 3D mesh rendering
  - `Volume`: volumetric ray-marching

### 🚧 Planned 
* **Optimized Primitives**: `Point` and `SimpleSphere` for massive systems
* **Line Primitives**: `Line` and `Polyline`
* **Media**: `Image` objects (png&gif)

## License

The content of this repository (Website/Docs) is licensed under the **MIT License**.

*Note: The NAIIVE application binaries and source code hosted in the private repository are currently proprietary.*