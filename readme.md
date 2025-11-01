# 💜 girl_mode

> **A modern community platform for empowerment, support, and real talk.**  
> Inspired by the groundbreaking spirit of early 2000s web communities.

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ About

**girl_mode** is a vibrant online community space designed for girls and young women to connect, express themselves, and find support. Built with modern web technologies while honoring the nostalgic aesthetic of early 2000s web communities.

### 🎯 Mission

Create a safe, welcoming, and empowering digital space where:
- 💬 **Real conversations happen** - Share thoughts, ask questions, get support
- 🎨 **Creativity thrives** - Showcase art, writing, photography, and more
- 🧠 **Learning is fun** - Access honest education on health, relationships, identity
- 👥 **Friendships form** - Connect with people who truly get it
- 💜 **Everyone belongs** - A judgment-free zone for self-expression

---

## 🌟 Features

### 🏠 **User Dashboard ("Your Room")**
- Personalized welcome and profile
- Real-time notifications (messages, friend requests, board activity)
- Quick actions panel
- Recent activity feed
- Friends list with online status

### 💬 **Connect Section**
- **Shout Out Boards** - Community forums for discussion
- **Your Room** - Customizable personal profile pages
- **Find Friends** - Connect with other members
- **Community Features** - Groups, events, and more

### 📚 **Find Out Section**
- **Help Me Heather** - Advice column
- **Sex Ed Blog** - Honest, comprehensive sex education
- **Health & Body** - Body positivity and wellness resources
- **Articles** - Educational content on various topics

### 🎮 **Play Section**
- **Games** - Fun interactive games
- **Quizzes** - Personality quizzes and polls
- **Generators** - Random generators (name, style, etc.)
- **Fun Stuff** - Entertainment and creativity tools

### 🎨 **Show Off Section**
- **Comix** - User-submitted comics and art
- **Photos** - Photo galleries and albums
- **Your Stories** - Creative writing submissions
- **Submit Art** - Share your creative work

### ⚡ **React Section**
- **Polls** - Vote on trending topics
- **Videos** - Video content and reactions
- **Discussions** - Debate and discuss
- **Dig or Dis** - Rate and review

### 🧭 **Explore Section**
- **Body Image** - Self-acceptance and body positivity
- **Sex & Relationships** - Dating, consent, boundaries
- **Mental Health** - Emotional wellness resources
- **Identity** - Gender, sexuality, self-discovery
- **School & Career** - Academic and professional guidance

---

## 🎨 Design Philosophy

### Visual Aesthetic
- **Neon color palette** - Cyan, magenta, hot pink, purple, lime, orange, yellow
- **Bold typography** - Space Grotesk font, lowercase styling
- **Thick borders** - High-contrast black outlines (3-4px)
- **Dark theme** - Black background with neon accents
- **Nostalgic vibes** - Early 2000s web aesthetic with modern UX

### UX Principles
- **Mobile-first responsive design** - Works seamlessly on all devices
- **Accessibility-focused** - ARIA labels, semantic HTML, keyboard navigation
- **Fast and lightweight** - Optimized performance, minimal dependencies
- **Progressive enhancement** - Core functionality works without JavaScript

---

## 📁 Project Structure

```
girl_mode/
├── index.html              # Homepage (3-column layout with sidebars)
├── styles.css              # Global styles (35KB)
├── script.js               # Site-wide JavaScript (2.9KB)
│
└── pages/                  # All site pages
    ├── your-room.html      # User dashboard (post-login landing)
    │
    ├── connect.html        # Community section hub
    ├── find-out.html       # Education section hub
    ├── play.html           # Games & entertainment hub
    ├── show-off.html       # Creative showcase hub
    ├── react.html          # Interactive content hub
    ├── explore.html        # Topics & resources hub
    │
    ├── login.html          # User authentication
    ├── join.html           # User registration
    │
    └── page-template.html  # Template for new pages
```

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties (CSS variables), Grid, Flexbox
- **Vanilla JavaScript (ES6+)** - No frameworks, pure JS
- **Font Awesome 6.4.0** - Icon library
- **Google Fonts** - Space Grotesk typeface

### Design Principles
- **Mobile-First Responsive Design** - Breakpoints at 768px, 1024px
- **Accessibility (A11y)** - WCAG 2.1 compliant
- **Cross-browser compatibility** - Chrome, Firefox, Safari, Edge
- **Progressive Web App ready** - Can be extended to PWA

### Performance
- **Lazy loading** - Images load on demand
- **Optimized assets** - Minified CSS/JS for production
- **Fast page loads** - ~100KB total page weight
- **Smooth animations** - View Transitions API, scroll-driven animations

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Text editor (VS Code, Sublime Text, etc.)
- Local development server (optional: Live Server, Python's http.server)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/girl_mode.git
   cd girl_mode
   ```

2. **Open in your browser**
   ```bash
   # Option 1: Direct file open
   open index.html
   
   # Option 2: Using Python server
   python -m http.server 8000
   # Then visit http://localhost:8000
   
   # Option 3: Using VS Code Live Server
   # Right-click index.html → "Open with Live Server"
   ```

3. **Start developing!**
   - Homepage: `index.html`
   - Pages: `pages/` folder
   - Styles: `styles.css`
   - Scripts: `script.js`

---

## 💻 Usage

### Creating New Pages

1. **Copy the template**
   ```bash
   cp pages/page-template.html pages/new-page.html
   ```

2. **Update the links** (already configured in template)
   ```html
   <!-- Link to homepage -->
   <a href="../index.html">home</a>
   
   <!-- Link to other pages -->
   <a href="./connect.html">connect</a>
   
   <!-- CSS/JS (up one level) -->
   <link rel="stylesheet" href="../styles.css">
   <script src="../script.js"></script>
   ```

3. **Add content** using the existing components
   ```html
   <div class="topic-box topic-cyan">
       <div class="topic-icon"><i class="fa-solid fa-heart"></i></div>
       <h3 class="topic-title">Your Title</h3>
       <p class="topic-text">Your content here</p>
   </div>
   ```

### Available Components

- **Topic Boxes** - Colored content cards (`.topic-box`)
- **Section Headings** - Large page headings (`.section-heading`)
- **Buttons** - Styled CTAs (`.btn`)
- **Quote Boxes** - Highlighted quotes (`.quote-box`)
- **Feature Cards** - Icon + text cards (`.feature-box`)

### Color Classes

- `.topic-cyan` - Cyan/turquoise
- `.topic-magenta` - Magenta/fuchsia
- `.topic-purple` - Purple
- `.topic-pink` - Hot pink
- `.topic-orange` - Orange
- `.topic-lime` - Lime green
- `.topic-yellow` - Yellow

---

## 🎯 Roadmap

### Phase 1: Core Features ✅ COMPLETE
- [x] Homepage with 3-column layout
- [x] 6 main section pages
- [x] User authentication UI (login/register)
- [x] User dashboard ("Your Room")
- [x] Mobile-responsive design
- [x] Font Awesome icon integration
- [x] Organized folder structure

### Phase 2: Backend Integration 🚧 IN PROGRESS
- [ ] User authentication system
- [ ] Database setup (PostgreSQL/MongoDB)
- [ ] User profiles and settings
- [ ] Session management
- [ ] API endpoints

### Phase 3: Community Features 📋 PLANNED
- [ ] Forum/board system
- [ ] Private messaging
- [ ] Friend system
- [ ] User-generated content (posts, photos, art)
- [ ] Comments and reactions
- [ ] Notifications system

### Phase 4: Interactive Features 📋 PLANNED
- [ ] Quizzes and polls
- [ ] Games
- [ ] Profile customization
- [ ] Photo albums
- [ ] Blog posts

### Phase 5: Content & Moderation 📋 PLANNED
- [ ] Advice column system
- [ ] Educational articles
- [ ] Content moderation tools
- [ ] Reporting system
- [ ] User guidelines enforcement

### Phase 6: Advanced Features 💭 FUTURE
- [ ] Real-time chat
- [ ] Video content
- [ ] Mobile app (React Native)
- [ ] Push notifications
- [ ] AI-powered content recommendations
- [ ] Multi-language support

---

## 🤝 Contributing

We welcome contributions! Whether it's:
- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 Design enhancements
- ♿ Accessibility improvements

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Write semantic, accessible HTML
- Use CSS custom properties for theming
- Test on multiple browsers and devices
- Add comments for complex logic
- Update documentation as needed

---

## 📸 Screenshots

### Homepage
*Coming soon - Add your screenshot here*

### User Dashboard
*Coming soon - Add your screenshot here*

### Mobile View
*Coming soon - Add your screenshot here*

---

## 🌈 Color Palette

```css
--black: #000000;          /* Primary background */
--white: #ffffff;          /* Primary text */
--cyan: #00d9ff;           /* Accent 1 */
--hot-pink: #ff0099;       /* Accent 2 */
--magenta: #ff00ff;        /* Accent 3 */
--purple: #9d4edd;         /* Accent 4 */
--orange: #ff6b35;         /* Accent 5 */
--lime: #ccff00;           /* Accent 6 */
--yellow: #ffd60a;         /* Accent 7 */
```

---

## 📖 Inspiration

This project is inspired by:
- **Early 2000s web aesthetic** - Bold colors, thick borders, personality
- **Classic community platforms** - Profile customization and self-expression
- **Forum culture** - Community engagement and creativity
- **Blog communities** - Personal expression and connection
- **Web 1.0 spirit** - When the internet felt more human and personal

### Why Create This?

Online communities for young women were revolutionary in the early days of the web - they provided honest, non-judgmental information and connection at a time when few resources existed. While the internet has evolved, the need for safe, supportive spaces hasn't disappeared. **girl_mode** aims to bring that spirit into 2025 with modern technology and contemporary understanding of identity, mental health, and digital safety.

---

## 🔒 Privacy & Safety

### Our Commitments
- **Privacy-first** - Minimal data collection, user control
- **Safe space** - Active moderation, zero tolerance for harassment
- **Age-appropriate** - Content suitable for teens (13+)
- **Transparent policies** - Clear privacy and community guidelines
- **Report systems** - Easy reporting of concerning content
- **No tracking** - No third-party analytics or ads

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💜 Acknowledgments

- **Early web pioneers** - For creating safe spaces online
- **Community builders** - For showing us what the internet could be
- **Modern web standards** - For making accessibility and performance achievable
- **Open source community** - For the tools that make this possible
- **All the girls** - Who deserve a space to be themselves

---

## 📞 Contact

- **Issues**: [GitHub Issues](https://github.com/yourusername/girl_mode/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/girl_mode/discussions)
- **Email**: contact@girlmode.com *(if applicable)*

---

## 🌟 Support This Project

If you find this project valuable:
- ⭐ Star this repository
- 🐛 Report bugs and issues
- 💡 Suggest new features
- 🤝 Contribute code or documentation
- 💬 Share with others who might benefit

---

<div align="center">

**Built with 💜 for the girls who need it**

*A space for empowerment, support, and real talk*

[Website](https://girlmode.com) • [Documentation](https://docs.girlmode.com) • [Community](https://community.girlmode.com)

</div>

---

## 🔧 Development Status

| Feature | Status |
|---------|--------|
| Homepage | ✅ Complete |
| Section Pages | ✅ Complete |
| User Dashboard | ✅ Complete |
| Authentication UI | ✅ Complete |
| Responsive Design | ✅ Complete |
| Accessibility | ✅ Complete |
| Backend Integration | 🚧 In Progress |
| Forum System | 📋 Planned |
| Messaging | 📋 Planned |
| Content Moderation | 📋 Planned |

**Last Updated:** November 2025

---

*girl_mode - deal with it. 💜✨*
