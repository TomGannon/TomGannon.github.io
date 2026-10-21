# Tom Gannon

Personal academic website, adapted from https://sites.google.com/view/tomgannon.

## Updating the website

Edit the corresponding HTML file on GitHub and commit the change. GitHub Pages publishes updates from the `main` branch. No installation or build is required.

- `index.html`: introduction, photograph, CV, and contact information
- `research.html`: research articles
- `teaching.html`: teaching information
- `notes.html`: notes and expository writing
- `etc.html`: other interests
- `assets/site.css`: shared layout and appearance
- `assets/search-index.js`: text used by site search; update matching entries when changing content

The photograph, PDFs, and Lato font files are hosted with the website. The font license is in `assets/FONT-LICENSE.txt`.

## Updating PDFs without changing links

Replace the existing PDF in `files/` and keep its filename. Commit and push the replacement to `main`; GitHub Pages publishes the new version at the same address. For example, replacing `files/cv.pdf` updates https://tomgannon.github.io/files/cv.pdf without changing the CV link on the homepage.

On GitHub, open the `files` folder, choose **Add file → Upload files**, and upload the new PDF with exactly the existing filename. Commit the update. In GitHub Desktop, replace the file in your local `files` folder, commit, and push.

| Document | Stable file |
| --- | --- |
| CV | [cv.pdf](files/cv.pdf) |
| Partial symplectic resolutions: talk notes | [partial-symplectic-resolutions-talk-notes.pdf](files/partial-symplectic-resolutions-talk-notes.pdf) |
| Functoriality of Coulomb branches: talk notes | [functoriality-coulomb-branches-talk-notes.pdf](files/functoriality-coulomb-branches-talk-notes.pdf) |
| Ginzburg–Kazhdan conjecture: talk notes | [ginzburg-kazhdan-conjecture-talk-notes.pdf](files/ginzburg-kazhdan-conjecture-talk-notes.pdf) |
| Classification of nondegenerate G-categories | [classification-nondegenerate-g-categories.pdf](files/classification-nondegenerate-g-categories.pdf) |
| Categorical representation theory and the coarse quotient: slides | [categorical-representation-theory-coarse-quotient-slides.pdf](files/categorical-representation-theory-coarse-quotient-slides.pdf) |
| Recovering Lie(G)-modules from the Weyl group action: slides | [recovering-lie-g-modules-weyl-group-slides.pdf](files/recovering-lie-g-modules-weyl-group-slides.pdf) |
| Beilinson–Bernstein localization | [beilinson-bernstein-localization.pdf](files/beilinson-bernstein-localization.pdf) |
| Affine Kac–Moody algebras and quantum groups | [affine-kac-moody-algebras-quantum-groups.pdf](files/affine-kac-moody-algebras-quantum-groups.pdf) |
| Introduction to representation theory of Lie algebras | [introduction-lie-algebra-representation-theory.pdf](files/introduction-lie-algebra-representation-theory.pdf) |
| Primer on algebraic number theory | [primer-algebraic-number-theory.pdf](files/primer-algebraic-number-theory.pdf) |
| Arrow's impossibility theorem | [arrows-impossibility-theorem.pdf](files/arrows-impossibility-theorem.pdf) |
| Introduction to complexity theory | [introduction-complexity-theory.pdf](files/introduction-complexity-theory.pdf) |
| What I learned today | [what-i-learned-today.pdf](files/what-i-learned-today.pdf) |

To preview locally, serve this folder with any static web server, for example `python3 -m http.server 8000`, then visit http://localhost:8000.
