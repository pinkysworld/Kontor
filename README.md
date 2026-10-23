# Kontor website

Static, responsive DE/EN public website for Kontor. Intended URL: https://pinkysworld.github.io/Kontor/ . Deployment is pending until GitHub Pages has been configured and the live site verified. No build system or dependencies. No analytics, cookies, remotely loaded fonts, scripts or embedded services. A language preference is stored locally as `kontor-language`.

## Preview

```sh
python3 -m http.server 8080
```

Open http://localhost:8080/ . Test all three pages in DE/EN, desktop and mobile. With JavaScript disabled, German content remains readable.

## Provenance and factual boundaries

- `assets/kontor-illustration.png`: exact copy of `kontor_art4_20261023_evidence/keyart_candidate/store_variants/master_1232x706.png`. Promotional world illustration; explicitly labelled as not gameplay.
- `assets/{negotiation,desk,correspondence}.png`: unchanged viewport PNGs from `kontor_art5_20261023_evidence/final_native/compatibility_{duell,pinn,besuch}_en_1.0/viewport.png`, actual development gameplay, October 2026. Each links to its full-resolution source for inspection.
- `assets/minh_studios.png`: exact copy of Summgarten gh-pages `img/minh_studios.png`; links to https://minh.systems/ with accessible alt text.
- `assets/fonts`: unchanged Yfrak and Libre Caslon Text files from `game_kontor/godot/assets/fonts`. Their supplied SIL OFL licenses are included. Fraktur is restricted to the wordmark and document titles; body text uses readable Antiqua.
- Contact copied from Summgarten support/privacy: Michel Nguyen · Minh Nguyen Studios · mip@gmx.biz. Publication of that same contact was explicitly authorized. No phone/address invented.
- Game facts checked against `game_kontor/docs/STIL.md`, `docs/APPLE.md`, `docs/apple/STORE_TEXTE_ASC.md`, and `godot/scripts/apple_bruecke.gd`: four eras 1600–1720, maritime insurance, document/fraud decisions, offline campaign, optional Game Center, local saves/settings, touch seal and scrolling documents. The Apple bridge reports achievements/scores and loads display names/ranks. Privacy distinguishes the app, Apple services, support email and GitHub-hosted website.
- Public availability deliberately says “in preparation” for iPad and Mac. No live Store badge, purchase link, launch date, pricing, ratings or testimonial. Historical insurance is fictional gameplay, not a financial service.

The game project and Summgarten reference have not been modified by this website implementation.
