<script setup>
import { onMounted, ref } from 'vue'

const isEasterEggActive = ref(false)

onMounted(() => {
  initWordCycler()
  initEasterEgg()
  initScrollObserver()
})

function initScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1, // Trigger slightly earlier
        rootMargin: "0px"
    });

    document.querySelectorAll('.fade-in-scroll').forEach(el => observer.observe(el));
}

function initWordCycler() {
  const rows = document.querySelectorAll('.acronym-row')

  rows.forEach((row, index) => {
    const cycler = row.querySelector('.word-cycler')
    const words = cycler.querySelectorAll('.word')

    if (words.length <= 1) return

    let currentIndex = 0

    setInterval(() => {
      if (isEasterEggActive.value) return

      words[currentIndex].classList.remove('active')
      currentIndex = (currentIndex + 1) % words.length
      words[currentIndex].classList.add('active')
    }, 3000 + (index * 200))
  })
}

function initEasterEgg() {
  setInterval(() => {
    triggerEasterEgg()
  }, 60000)
}

function triggerEasterEgg() {
    isEasterEggActive.value = true;
    const rows = document.querySelectorAll('.acronym-row');
    const easterTexts = ["TOO YOUNG", "TOO SIMPLE", "SOMETIMES NAIVE"];
    const originalTexts = [];

    // Apply Easter Egg to first 3 rows
    for (let i = 0; i < 3; i++) {
        if (i >= rows.length) break;

        const row = rows[i];
        const cycler = row.querySelector('.word-cycler');
        const activeWord = cycler.querySelector('.word.active');

        if (activeWord) {
            originalTexts[i] = activeWord.textContent;
            activeWord.textContent = easterTexts[i];
        }
    }

    // Restore after 5 seconds
    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            if (i >= rows.length) break;
            const cycler = rows[i].querySelector('.word-cycler');
            const activeWord = cycler.querySelector('.word.active');

            if (activeWord && originalTexts[i]) {
                activeWord.textContent = originalTexts[i];
            }
        }
        isEasterEggActive.value = false;
    }, 5000);
}
</script>

<template>
  <div class="custom-home-container">
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <a href="/" class="logo"><img src="/favicon.svg" class="logo-favicon" alt="">NAIIVE</a>
            <div class="nav-links">
                <a href="/guide/getting-started">Docs</a>
                <a href="https://testflight.apple.com/join/VrYnN9nE" class="nav-btn">TestFlight Beta</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="hero">
        <div class="hero-bg-grid"></div>
        <div class="hero-glow"></div>

        <div class="container hero-content">
            <div class="acronym-display">
                <div class="acronym-row" data-letter="N">
                    <span class="letter">N</span>
                    <div class="word-cycler">
                        <span class="word active">ative</span>
                        <span class="word">odal</span>
                        <span class="word">S</span>
                    </div>
                </div>
                <div class="acronym-row" data-letter="A">
                    <span class="letter">A</span>
                    <div class="word-cycler">
                        <span class="word active">tomistic</span>
                        <span class="word">pple Silicon</span>
                        <span class="word">nalysis</span>
                    </div>
                </div>
                <div class="acronym-row" data-letter="I">
                    <span class="letter">I</span>
                    <div class="word-cycler">
                        <span class="word active">mmersive</span>
                        <span class="word">ntegrated</span>
                        <span class="word">nteractive</span>
                        <span class="word">ntuitive</span>
                    </div>
                </div>
                <div class="acronym-row" data-letter="V">
                    <span class="letter">V</span>
                    <div class="word-cycler">
                        <span class="word active">isualization</span>
                        <span class="word">erified</span>
                        <span class="word">olumetric</span>
                        <span class="word">ision</span>
                    </div>
                </div>
                <div class="acronym-row" data-letter="E">
                    <span class="letter">E</span>
                    <div class="word-cycler">
                        <span class="word active">ngine</span>
                        <span class="word">cosystem</span>
                        <span class="word">nvironment</span>
                    </div>
                </div>
            </div>

            <p class="hero-subtitle">An experiment to build easy yet powerful atomic visualization.</p>
        </div>

        <div class="scroll-indicator">
            <div style="margin-top: 40px;">
                <span>Scroll to Explore</span>
                <div class="scroll-line"></div>
            </div>
        </div>
    </header>

    <!-- Scroll Narrative Section -->
    <main class="narrative-section">
        <div class="expanded-container">
            <!-- N: Node Editor -->
            <div class="narrative-row fade-in-scroll">
                <div class="narrative-text">
                    <h2 class="narrative-heading">Node editor Analysis</h2>
                    <p><span class="wip-tag">Work in progress</span> Flexible, non-destructive workflows. Build complex analysis pipelines just by connecting the dots.</p>
                </div>
                <div class="narrative-visual">
                    <img src="/images/main/Node.png" alt="Node Editor Interface" class="feature-img">
                </div>
            </div>

            <!-- A: Analysis -->
            <!-- <div class="narrative-row reverse fade-in-scroll">
                <div class="narrative-text">
                    <h2 class="narrative-heading">Analysis</h2>
                    <p>Real-time structural analysis. Get immediate feedback on your simulation data.</p>
                </div>
                <div class="narrative-visual">
                    <img src="/images/main/lmp1M.png" alt="Analysis Dashboard" class="feature-img">
                </div>
            </div> -->

            <!-- I: Immersive -->
            <div class="narrative-row fade-in-scroll">
                <div class="narrative-text">
                    <h2 class="narrative-heading">Immersive</h2>
                    <p>Step inside your data. Native spatial rendering on Apple Vision Pro brings atoms to life.</p>
                </div>
                <div class="narrative-visual">
                    <img src="/images/main/Spatial_lmp1M.png" alt="Spatial Rendering" class="feature-img">
                </div>
            </div>

            <!-- V: Volumetric -->
            <div class="narrative-row reverse fade-in-scroll">
                <div class="narrative-text">
                    <h2 class="narrative-heading">Volumetric</h2>
                    <p>High-fidelity density rendering. Visualize fields and clouds with astonishing clarity.</p>
                </div>
                <div class="narrative-visual">
                    <img src="/images/main/Spatial_xros.png" alt="Volumetric Rendering" class="feature-img">
                </div>
            </div>

            <!-- E: Ecosystem -->
            <div class="narrative-row fade-in-scroll">
                <div class="narrative-text">
                    <h2 class="narrative-heading">Ecosystem</h2>
                    <p>Seamlessly available on macOS, iOS, and visionOS. Your research goes wherever you go.</p>
                </div>
                <div class="narrative-visual">
                    <img src="/images/main/multiplatform.png" alt="Apple Ecosystem" class="feature-img">
                </div>
            </div>
        </div>

        <section id="features" class="features-section">
            <div class="container">
                <h2 class="section-title">Features</h2>

                <div class="features-grid">
                    <!-- Feature 2 -->
                    <div class="feature-card fade-in-scroll">
                        <div class="feature-icon">🕸️</div>
                        <h3>Node Editor</h3>
                        <p>Non-destructive workflow. Build complex analysis pipelines by connecting nodes. Undo, redo, and iterate instantly.</p>
                    </div>

                    <!-- Feature 3 -->
                    <div class="feature-card fade-in-scroll">
                        <div class="feature-icon">🥽</div>
                        <h3>Spatial Computing</h3>
                        <p>Native support for Apple Vision Pro. Walk through your simulation data in a fully immersive environment.</p>
                    </div>

                    <!-- Feature 4
                    <div class="feature-card fade-in-scroll">
                        <div class="feature-icon">☁️</div>
                        <h3>Ecosystem Ready</h3>
                        <p>Seamlessly sync between Mac, iPad, and Vision Pro. Your data, everywhere you work.</p>
                    </div> -->
                </div>
            </div>
        </section>

        <!-- Supported File Formats Section -->
        <section class="formats-section">
            <div class="container">
                <h2 class="section-title">Supported File Formats</h2>
            </div>
            <div class="formats-ticker-wall">
                <!-- Row 1: left -->
                <div class="ticker-row">
                    <div class="ticker-track ticker-left">
                        <span class="ticker-item"><span class="fmt-cat">LAMMPS</span><span class="fmt-badge">.data</span><span class="fmt-badge">.dump</span><span class="fmt-badge">.dump.gz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">VASP</span><span class="fmt-badge">OUTCAR</span><span class="fmt-badge">POSCAR</span><span class="fmt-badge">CHGCAR</span><span class="fmt-badge">XDATCAR</span></span>
                        <span class="ticker-item"><span class="fmt-cat">XYZ</span><span class="fmt-badge">.xyz</span><span class="fmt-badge">.extxyz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">GAMESS</span><span class="fmt-badge">.inp</span><span class="fmt-badge">.log</span></span>
                        <span class="ticker-item"><span class="fmt-cat">DeepMD</span><span class="fmt-badge">/raw</span><span class="fmt-badge">/npy</span></span>
                        <span class="ticker-item"><span class="fmt-cat">NumPy</span><span class="fmt-badge">.npy</span><span class="fmt-badge">.npz</span></span>
                        <!-- duplicate for seamless loop -->
                        <span class="ticker-item"><span class="fmt-cat">LAMMPS</span><span class="fmt-badge">.data</span><span class="fmt-badge">.dump</span><span class="fmt-badge">.dump.gz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">VASP</span><span class="fmt-badge">OUTCAR</span><span class="fmt-badge">POSCAR</span><span class="fmt-badge">CHGCAR</span><span class="fmt-badge">XDATCAR</span></span>
                        <span class="ticker-item"><span class="fmt-cat">XYZ</span><span class="fmt-badge">.xyz</span><span class="fmt-badge">.extxyz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">GAMESS</span><span class="fmt-badge">.inp</span><span class="fmt-badge">.log</span></span>
                        <span class="ticker-item"><span class="fmt-cat">DeepMD</span><span class="fmt-badge">/raw</span><span class="fmt-badge">/npy</span></span>
                        <span class="ticker-item"><span class="fmt-cat">NumPy</span><span class="fmt-badge">.npy</span><span class="fmt-badge">.npz</span></span>
                    </div>
                </div>
                <!-- Row 2: right -->
                <div class="ticker-row">
                    <div class="ticker-track ticker-right">
                        <span class="ticker-item"><span class="fmt-cat">VASP</span><span class="fmt-badge">OUTCAR</span><span class="fmt-badge">POSCAR</span><span class="fmt-badge">CHGCAR</span><span class="fmt-badge">XDATCAR</span></span>
                        <span class="ticker-item"><span class="fmt-cat">DeepMD</span><span class="fmt-badge">/raw</span><span class="fmt-badge">/npy</span></span>
                        <span class="ticker-item"><span class="fmt-cat">LAMMPS</span><span class="fmt-badge">.data</span><span class="fmt-badge">.dump</span><span class="fmt-badge">.dump.gz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">XYZ</span><span class="fmt-badge">.xyz</span><span class="fmt-badge">.extxyz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">GAMESS</span><span class="fmt-badge">.inp</span><span class="fmt-badge">.log</span></span>
                        <span class="ticker-item"><span class="fmt-cat">NumPy</span><span class="fmt-badge">.npy</span><span class="fmt-badge">.npz</span></span>
                        <!-- duplicate -->
                        <span class="ticker-item"><span class="fmt-cat">VASP</span><span class="fmt-badge">OUTCAR</span><span class="fmt-badge">POSCAR</span><span class="fmt-badge">CHGCAR</span><span class="fmt-badge">XDATCAR</span></span>
                        <span class="ticker-item"><span class="fmt-cat">DeepMD</span><span class="fmt-badge">/raw</span><span class="fmt-badge">/npy</span></span>
                        <span class="ticker-item"><span class="fmt-cat">LAMMPS</span><span class="fmt-badge">.data</span><span class="fmt-badge">.dump</span><span class="fmt-badge">.dump.gz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">XYZ</span><span class="fmt-badge">.xyz</span><span class="fmt-badge">.extxyz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">GAMESS</span><span class="fmt-badge">.inp</span><span class="fmt-badge">.log</span></span>
                        <span class="ticker-item"><span class="fmt-cat">NumPy</span><span class="fmt-badge">.npy</span><span class="fmt-badge">.npz</span></span>
                    </div>
                </div>
                <!-- Row 3: left, slower -->
                <div class="ticker-row">
                    <div class="ticker-track ticker-left ticker-slow">
                        <span class="ticker-item"><span class="fmt-cat">GAMESS</span><span class="fmt-badge">.inp</span><span class="fmt-badge">.log</span></span>
                        <span class="ticker-item"><span class="fmt-cat">XYZ</span><span class="fmt-badge">.xyz</span><span class="fmt-badge">.extxyz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">VASP</span><span class="fmt-badge">OUTCAR</span><span class="fmt-badge">POSCAR</span><span class="fmt-badge">CHGCAR</span><span class="fmt-badge">XDATCAR</span></span>
                        <span class="ticker-item"><span class="fmt-cat">DeepMD</span><span class="fmt-badge">/raw</span><span class="fmt-badge">/npy</span></span>
                        <span class="ticker-item"><span class="fmt-cat">LAMMPS</span><span class="fmt-badge">.data</span><span class="fmt-badge">.dump</span><span class="fmt-badge">.dump.gz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">NumPy</span><span class="fmt-badge">.npy</span><span class="fmt-badge">.npz</span></span>
                        <!-- duplicate -->
                        <span class="ticker-item"><span class="fmt-cat">GAMESS</span><span class="fmt-badge">.inp</span><span class="fmt-badge">.log</span></span>
                        <span class="ticker-item"><span class="fmt-cat">XYZ</span><span class="fmt-badge">.xyz</span><span class="fmt-badge">.extxyz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">VASP</span><span class="fmt-badge">OUTCAR</span><span class="fmt-badge">POSCAR</span><span class="fmt-badge">CHGCAR</span><span class="fmt-badge">XDATCAR</span></span>
                        <span class="ticker-item"><span class="fmt-cat">DeepMD</span><span class="fmt-badge">/raw</span><span class="fmt-badge">/npy</span></span>
                        <span class="ticker-item"><span class="fmt-cat">LAMMPS</span><span class="fmt-badge">.data</span><span class="fmt-badge">.dump</span><span class="fmt-badge">.dump.gz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">NumPy</span><span class="fmt-badge">.npy</span><span class="fmt-badge">.npz</span></span>
                    </div>
                </div>
                <!-- Row 4: right, slower -->
                <div class="ticker-row">
                    <div class="ticker-track ticker-right ticker-slow">
                        <span class="ticker-item"><span class="fmt-cat">XYZ</span><span class="fmt-badge">.xyz</span><span class="fmt-badge">.extxyz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">LAMMPS</span><span class="fmt-badge">.data</span><span class="fmt-badge">.dump</span><span class="fmt-badge">.dump.gz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">GAMESS</span><span class="fmt-badge">.inp</span><span class="fmt-badge">.log</span></span>
                        <span class="ticker-item"><span class="fmt-cat">VASP</span><span class="fmt-badge">OUTCAR</span><span class="fmt-badge">POSCAR</span><span class="fmt-badge">CHGCAR</span><span class="fmt-badge">XDATCAR</span></span>
                        <span class="ticker-item"><span class="fmt-cat">DeepMD</span><span class="fmt-badge">/raw</span><span class="fmt-badge">/npy</span></span>
                        <span class="ticker-item"><span class="fmt-cat">NumPy</span><span class="fmt-badge">.npy</span><span class="fmt-badge">.npz</span></span>
                        <!-- duplicate -->
                        <span class="ticker-item"><span class="fmt-cat">XYZ</span><span class="fmt-badge">.xyz</span><span class="fmt-badge">.extxyz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">LAMMPS</span><span class="fmt-badge">.data</span><span class="fmt-badge">.dump</span><span class="fmt-badge">.dump.gz</span></span>
                        <span class="ticker-item"><span class="fmt-cat">GAMESS</span><span class="fmt-badge">.inp</span><span class="fmt-badge">.log</span></span>
                        <span class="ticker-item"><span class="fmt-cat">VASP</span><span class="fmt-badge">OUTCAR</span><span class="fmt-badge">POSCAR</span><span class="fmt-badge">CHGCAR</span><span class="fmt-badge">XDATCAR</span></span>
                        <span class="ticker-item"><span class="fmt-cat">DeepMD</span><span class="fmt-badge">/raw</span><span class="fmt-badge">/npy</span></span>
                        <span class="ticker-item"><span class="fmt-cat">NumPy</span><span class="fmt-badge">.npy</span><span class="fmt-badge">.npz</span></span>
                    </div>
                </div>
            </div>
            <p class="formats-more">✦ more formats coming soon ✦</p>
        </section>

        <!-- CTA / Read to explore -->
        <section class="cta-standalone">
            <div class="container">
                <div class="cta-section fade-in-scroll">
                    <h3>Ready to explore?</h3>
                    <div class="btn-group">
                        <a href="https://testflight.apple.com/join/VrYnN9nE" class="btn-primary">Join TestFlight</a>
                        <a href="/guide/getting-started" class="btn-secondary">Go to Docs</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section id="faq" class="faq-section">
            <div class="container">
                <h2 class="section-title">Frequently Asked Questions</h2>

                <div class="faq-list">
                    <div class="faq-item fade-in-scroll">
                        <div class="faq-question">Hardware Support?</div>
                        <div class="faq-answer">NAIIVE is built exclusively for Apple Silicon. It runs natively on M1/M2/M3/M4 Macs, Apple Vision Pro, iPads, and iPhones.</div>
                    </div>

                    <div class="faq-item fade-in-scroll">
                        <div class="faq-question">Platforms?</div>
                        <div class="faq-answer">Available on macOS 26+, iOS/iPadOS 26+, and visionOS 26+.</div>
                    </div>

                    <div class="faq-item fade-in-scroll">
                        <div class="faq-question">Release Date?</div>
                        <div class="faq-answer">NAIIVE is currently in active early development. You can join the public beta via TestFlight.</div>
                    </div>

                    <div class="faq-item fade-in-scroll">
                        <div class="faq-question">Why shouldn't I vibe-code it over the weekend myself?</div>
                        <div class="faq-answer">You are absolutely right!</div>
                    </div>

                    <div class="faq-item fade-in-scroll">
                        <div class="faq-question">Price?</div>
                        <div class="faq-answer">NAIIVE is free to use. No in-app purchases or subscriptions. If you find it useful, consider <a href="https://github.com/sponsors/zrzrv5" target="_blank" class="sponsor-link">sponsoring on GitHub ♥</a>.</div>
                    </div>

                    <div class="faq-item fade-in-scroll">
                        <div class="faq-question">Data Policy</div>
                        <div class="faq-answer">NAIIVE does not collect or store any data. No data is sent to servers or third parties.</div>
                    </div>


                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p class="footer-note">&copy; 2026 NAIIVE. Built by <a href="https://me.1sec.plus" target="_blank">R.Z.</a> Naively assuming it works.</p>
        </div>
    </footer>
  </div>
</template>

<style scoped>
/* Scoped styles specifi to Home.vue */

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 32px;
}

.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding-top: 60px;
}

.hero-bg-grid {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
    -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
    z-index: 0;
}

.hero-glow {
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(45, 140, 240, 0.15) 0%, rgba(55, 234, 93, 0.05) 50%, transparent 70%);
    border-radius: 50%;
    filter: blur(80px);
    z-index: 0;
    animation: glowPulse 8s infinite alternate;
}

.acronym-display {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
    z-index: 1;
}

.acronym-row {
    display: flex;
    align-items: center; /* Changed from baseline to center for better visual alignment with large fonts */
    font-family: var(--font-heading);
    font-size: 5rem;
    line-height: 1; /* Tighter line height */
    font-weight: 900;
    text-transform: uppercase;
    height: 1.2em; /* Fixed height to stabilize alignment */
}

@media (max-width: 768px) {
    .acronym-row { font-size: 3rem; }
}

.letter {
    color: var(--geek-text-color);
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
    width: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
}

.word-cycler {
    position: relative;
    height: 1.1em;
    width: auto;
    min-width: 300px;
    display: flex;
    align-items: center;
    padding-left: 10px; /* Slight offset */
}

.word {
    display: inline-block;
    white-space: nowrap;
    opacity: 0.1;
    transform: translateX(-10px);
    transition: opacity 0.6s ease, transform 0.6s ease, color 0.6s ease;
    position: absolute;
    left: 0;
}

.word.active {
    opacity: 1;
    transform: translateX(0);
    color: var(--geek-text-color);
    z-index: 10;
}

/* Specific Colors per Row */
.acronym-row[data-letter="N"] .active { color: var(--geek-accent-red); text-shadow: 0 0 15px rgba(234, 51, 93, 0.4); }
.acronym-row[data-letter="A"] .active { color: var(--geek-accent-green); text-shadow: 0 0 15px rgba(55, 234, 93, 0.4); }
.acronym-row[data-letter="I"] .active { color: var(--geek-accent-blue); text-shadow: 0 0 15px rgba(45, 140, 240, 0.4); }

.hero-subtitle {
    font-size: 1.25rem;
    color: var(--geek-text-muted);
    max-width: 600px;
    text-align: center;
    margin-top: 20px;
    z-index: 1;
}

.scroll-indicator {
    position: absolute;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    opacity: 0.5;
    font-size: 0.9rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    z-index: 1;
}

.scroll-line {
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, var(--geek-text-color), transparent);
}

.btn-group {
    display: flex;
    gap: 20px;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.btn-primary {
    background: var(--geek-text-color);
    color: var(--geek-bg-color) !important;
    padding: 10px 24px;
    border-radius: 99px;
    font-weight: 600 !important;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    box-sizing: border-box;
    transition: opacity 0.2s;
    border: 1px solid var(--geek-text-color); /* Invisible border to match secondary size if needed, or just style choice */
}

.btn-secondary {
    background: transparent;
    color: var(--geek-text-color) !important;
    padding: 10px 24px;
    border-radius: 99px;
    font-weight: 600 !important;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    box-sizing: border-box;
    border: 1px solid var(--geek-text-color);
    transition: opacity 0.2s, background 0.2s;
}

.btn-primary:hover, .btn-secondary:hover {
    opacity: 0.8;
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
}

.nav-btn {
    background: var(--geek-text-color);
    color: var(--geek-bg-color) !important;
    padding: 6px 16px;
    border-radius: 99px;
    font-weight: 600 !important;
    text-decoration: none;
    font-size: 0.9rem;
    transition: opacity 0.2s;
}

.nav-btn:hover {
    opacity: 0.9;
}
/* ── Supported File Formats ticker ── */
.formats-section {
    padding: 80px 0 60px;
    overflow: hidden;
}

.formats-section .section-title {
    text-align: center;
    margin-bottom: 40px;
}

.formats-ticker-wall {
    display: flex;
    flex-direction: column;
    gap: 0;
    /* fade edges */
    mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}

.ticker-row {
    overflow: hidden;
    padding: 6px 0;
    border-top: 1px solid rgba(255,255,255,0.05);
}

.ticker-row:last-child {
    border-bottom: 1px solid rgba(255,255,255,0.05);
}

.ticker-track {
    display: flex;
    gap: 0;
    width: max-content;
    will-change: transform;
}

/* Scroll left (normal direction) */
.ticker-left {
    animation: tickerScrollLeft 30s linear infinite;
}

/* Scroll right (reverse direction) */
.ticker-right {
    animation: tickerScrollRight 30s linear infinite;
}

/* Slower variants */
.ticker-slow.ticker-left {
    animation-duration: 42s;
}

.ticker-slow.ticker-right {
    animation-duration: 38s;
}

@keyframes tickerScrollLeft {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

@keyframes tickerScrollRight {
    0%   { transform: translateX(-50%); }
    100% { transform: translateX(0); }
}

.ticker-item {
    display: inline-flex;
    align-items: baseline;
    gap: 8px;
    padding: 10px 28px;
    white-space: nowrap;
    font-size: 1rem;
    letter-spacing: 0.01em;
}

.fmt-cat {
    font-weight: 700;
    color: var(--geek-text-color);
    font-size: 1rem;
}

.fmt-badge {
    display: inline-block;
    font-weight: 300;
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.45);
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    padding: 1px 7px;
    margin-left: 5px;
    letter-spacing: 0.04em;
    white-space: nowrap;
}

/* CTA standalone wrapper */
.cta-standalone {
    padding: 20px 0 80px;
}

.cta-section {
    text-align: center;
    padding: 60px 0 20px;
}

.cta-section h3 {
    font-size: 1.8rem;
    margin-bottom: 0;
}

/* ── Logo link ── */
.logo {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    text-decoration: none !important;
    color: var(--geek-text-color) !important;
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: 0.05em;
}

.logo:hover {
    opacity: 0.8;
}

.logo-favicon {
    width: 22px;
    height: 22px;
    display: block;
}

/* ── WIP tag ── */
.wip-tag {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(255, 200, 80, 0.9);
    background: rgba(255, 200, 80, 0.1);
    border: 1px solid rgba(255, 200, 80, 0.25);
    border-radius: 4px;
    padding: 1px 6px;
    vertical-align: middle;
    margin-right: 4px;
}

/* ── Formats "more coming" footer ── */
.formats-more {
    text-align: center;
    margin-top: 20px;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.2);
}

/* ── Sponsor link ── */
.sponsor-link {
    color: rgba(255, 120, 150, 0.85) !important;
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 120, 150, 0.3);
    transition: color 0.2s, border-color 0.2s;
}

.sponsor-link:hover {
    color: rgba(255, 140, 165, 1) !important;
    border-color: rgba(255, 140, 165, 0.6);
}

</style>
