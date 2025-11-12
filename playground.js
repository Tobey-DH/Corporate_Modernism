// Design Playground - Interactive Design System Tool
// This file handles all the interactive playground features

class DesignPlayground {
    constructor() {
        this.defaultTokens = {
            accentColor: '#3B82F6',
            headingSize: 42,
            bodySize: 16,
            lineHeight: 1.6,
            baseUnit: 8
        };

        this.currentTokens = { ...this.defaultTokens };
        this.init();
    }

    init() {
        this.setupElements();
        this.attachEventListeners();
        this.updatePreview();
    }

    setupElements() {
        // Color controls
        this.accentColor = document.getElementById('accentColor');
        this.accentHex = document.getElementById('accentHex');
        
        // Typography controls
        this.headingSize = document.getElementById('headingSize');
        this.headingSizeValue = document.getElementById('headingSizeValue');
        this.bodySize = document.getElementById('bodySize');
        this.bodySizeValue = document.getElementById('bodySizeValue');
        this.lineHeight = document.getElementById('lineHeight');
        this.lineHeightValue = document.getElementById('lineHeightValue');
        
        // Spacing controls
        this.baseUnit = document.getElementById('baseUnit');
        this.baseUnitValue = document.getElementById('baseUnitValue');
        
        // Buttons
        this.resetBtn = document.getElementById('resetBtn');
        this.exportBtn = document.getElementById('exportBtn');
        this.presetBtns = document.querySelectorAll('.preset-btn');
        
        // Modal
        this.exportModal = document.getElementById('exportModal');
        this.closeModal = document.getElementById('closeModal');
        this.copyBtn = document.getElementById('copyBtn');
        this.downloadBtn = document.getElementById('downloadBtn');
        this.exportCode = document.getElementById('exportCode');
        
        // Preview elements
        this.typographyPreview = document.getElementById('typographyPreview');
        this.swatchPrimary = document.getElementById('swatchPrimary');
        this.swatchHover = document.getElementById('swatchHover');
        this.previewBtn = document.getElementById('previewBtn');
        this.previewCard = document.getElementById('previewCard');
    }

    attachEventListeners() {
        // Color controls
        this.accentColor.addEventListener('input', (e) => this.handleColorChange(e.target.value));
        this.accentHex.addEventListener('input', (e) => this.handleHexInput(e.target.value));
        
        // Typography controls
        this.headingSize.addEventListener('input', (e) => this.handleHeadingSizeChange(e.target.value));
        this.bodySize.addEventListener('input', (e) => this.handleBodySizeChange(e.target.value));
        this.lineHeight.addEventListener('input', (e) => this.handleLineHeightChange(e.target.value));
        
        // Spacing controls
        this.baseUnit.addEventListener('input', (e) => this.handleBaseUnitChange(e.target.value));
        
        // Buttons
        this.resetBtn.addEventListener('click', () => this.resetToDefaults());
        this.exportBtn.addEventListener('click', () => this.openExportModal());
        this.presetBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const color = e.target.getAttribute('data-color');
                this.updateColor(color);
            });
        });
        
        // Modal
        this.closeModal.addEventListener('click', () => this.closeExportModal());
        this.copyBtn.addEventListener('click', () => this.copyToClipboard());
        this.downloadBtn.addEventListener('click', () => this.downloadJSON());
        
        // Close modal on background click
        this.exportModal.addEventListener('click', (e) => {
            if (e.target === this.exportModal) {
                this.closeExportModal();
            }
        });
    }

    handleColorChange(color) {
        this.currentTokens.accentColor = color;
        this.accentHex.value = color.toUpperCase();
        this.accentColor.value = color;
        this.updatePreview();
    }

    handleHexInput(value) {
        // Validate hex color
        if (/^#[0-9A-F]{6}$/i.test(value)) {
            this.currentTokens.accentColor = value;
            this.accentColor.value = value;
            this.updatePreview();
        }
    }

    handleHeadingSizeChange(value) {
        this.currentTokens.headingSize = parseInt(value);
        this.headingSizeValue.textContent = value + 'px';
        this.updatePreview();
    }

    handleBodySizeChange(value) {
        this.currentTokens.bodySize = parseInt(value);
        this.bodySizeValue.textContent = value + 'px';
        this.updatePreview();
    }

    handleLineHeightChange(value) {
        this.currentTokens.lineHeight = parseFloat(value);
        this.lineHeightValue.textContent = value;
        this.updatePreview();
    }

    handleBaseUnitChange(value) {
        this.currentTokens.baseUnit = parseInt(value);
        this.baseUnitValue.textContent = value + 'px';
        this.updatePreview();
    }

    updateColor(color) {
        this.accentColor.value = color;
        this.accentHex.value = color;
        this.currentTokens.accentColor = color;
        this.updatePreview();
    }

    updatePreview() {
        // Update accent color in swatches
        this.swatchPrimary.style.backgroundColor = this.currentTokens.accentColor;
        
        // Update hover state (darker version)
        const hoverColor = this.darkenColor(this.currentTokens.accentColor, 20);
        this.swatchHover.style.backgroundColor = hoverColor;
        
        // Update button preview
        this.previewBtn.style.backgroundColor = this.currentTokens.accentColor;
        
        // Update typography preview
        const typography = this.typographyPreview;
        const h1 = typography.querySelector('h1');
        const p = typography.querySelector('p');
        
        h1.style.fontSize = this.currentTokens.headingSize + 'px';
        p.style.fontSize = this.currentTokens.bodySize + 'px';
        p.style.lineHeight = this.currentTokens.lineHeight;
        
        // Update card styling with base unit
        const spacing = this.currentTokens.baseUnit;
        this.previewCard.style.padding = (spacing * 2.5) + 'px';
        this.previewCard.style.marginTop = (spacing * 2) + 'px';
        this.previewCard.style.marginBottom = (spacing * 2) + 'px';
        
        // Update root CSS variables for live preview
        document.documentElement.style.setProperty('--playground-accent', this.currentTokens.accentColor);
        document.documentElement.style.setProperty('--playground-heading-size', this.currentTokens.headingSize + 'px');
        document.documentElement.style.setProperty('--playground-body-size', this.currentTokens.bodySize + 'px');
        document.documentElement.style.setProperty('--playground-line-height', this.currentTokens.lineHeight);
        document.documentElement.style.setProperty('--playground-base-unit', this.currentTokens.baseUnit + 'px');
    }

    darkenColor(color, percent) {
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) - amt;
        const G = (num >> 8 & 0x00FF) - amt;
        const B = (num & 0x0000FF) - amt;
        return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255))
            .toString(16).slice(1);
    }

    resetToDefaults() {
        this.currentTokens = { ...this.defaultTokens };
        this.accentColor.value = this.defaultTokens.accentColor;
        this.accentHex.value = this.defaultTokens.accentColor;
        this.headingSize.value = this.defaultTokens.headingSize;
        this.bodySizeValue.textContent = this.defaultTokens.headingSize + 'px';
        this.bodySize.value = this.defaultTokens.bodySize;
        this.bodySizeValue.textContent = this.defaultTokens.bodySize + 'px';
        this.lineHeight.value = this.defaultTokens.lineHeight;
        this.lineHeightValue.textContent = this.defaultTokens.lineHeight;
        this.baseUnit.value = this.defaultTokens.baseUnit;
        this.baseUnitValue.textContent = this.defaultTokens.baseUnit + 'px';
        this.updatePreview();
    }

    openExportModal() {
        const tokens = this.generateExportJSON();
        this.exportCode.value = tokens;
        this.exportModal.style.display = 'flex';
    }

    closeExportModal() {
        this.exportModal.style.display = 'none';
    }

    generateExportJSON() {
        const tokens = {
            version: '1.0',
            timestamp: new Date().toISOString(),
            colors: {
                primary: {
                    accent: this.currentTokens.accentColor,
                    hover: this.darkenColor(this.currentTokens.accentColor, 20),
                    background: '#FAFAFA',
                    text: '#1A1A1A'
                }
            },
            typography: {
                heading: {
                    size: this.currentTokens.headingSize + 'px',
                    weight: 700,
                    fontFamily: 'Inter, sans-serif'
                },
                body: {
                    size: this.currentTokens.bodySize + 'px',
                    weight: 400,
                    lineHeight: this.currentTokens.lineHeight,
                    fontFamily: 'Inter, sans-serif'
                }
            },
            spacing: {
                base: this.currentTokens.baseUnit + 'px',
                xs: (this.currentTokens.baseUnit * 0.5) + 'px',
                sm: (this.currentTokens.baseUnit * 1) + 'px',
                md: (this.currentTokens.baseUnit * 2) + 'px',
                lg: (this.currentTokens.baseUnit * 3) + 'px',
                xl: (this.currentTokens.baseUnit * 4) + 'px',
                '2xl': (this.currentTokens.baseUnit * 6) + 'px'
            }
        };

        return JSON.stringify(tokens, null, 2);
    }

    copyToClipboard() {
        this.exportCode.select();
        document.execCommand('copy');
        
        // Feedback
        const originalText = this.copyBtn.textContent;
        this.copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            this.copyBtn.textContent = originalText;
        }, 2000);
    }

    downloadJSON() {
        const tokens = this.generateExportJSON();
        const blob = new Blob([tokens], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'design-tokens-' + new Date().getTime() + '.json';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new DesignPlayground();
});
