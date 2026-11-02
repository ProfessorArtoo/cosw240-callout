# COSW 240 Callout Block

A simple WordPress block plugin used in COSW 240 to practice Git and GitHub. It adds a **Callout** block to the editor: a box with a colored left border and editable text.

The plugin has no build step. There is no Node, npm, or `@wordpress/scripts`, so you can read and understand every line.

## Requirements

- WordPress 6.3 or later
- A local development environment, such as [Local](https://localwp.com/)
- [Git](https://git-scm.com/) and a [GitHub](https://github.com/) account

## File Structure

```
cosw240-callout/
├── cosw240-callout.php   ← plugin header; registers the block
├── block.json            ← block settings: name, title, icon, attributes, files
├── index.js              ← editor code: edit() and save()
├── index.asset.php       ← WordPress scripts index.js depends on
├── style.css             ← block styles for the editor and front end
├── .gitignore
└── README.md
```

| File | Purpose |
|---|---|
| `cosw240-callout.php` | The main plugin file. Its comment header lists the plugin under Plugins, and `register_block_type( __DIR__ )` registers the block from `block.json`. |
| `block.json` | Describes the block. Defines the `message` attribute and tells WordPress which JavaScript and CSS files to load. |
| `index.js` | Defines what the author sees while editing (`edit`) and the HTML saved to the database (`save`). |
| `index.asset.php` | Lists `wp-blocks`, `wp-element`, and `wp-block-editor` so they load before `index.js`. |
| `style.css` | Styles the `.wp-block-cosw240-callout` class in both the editor and on the live site. |

## Installation

### Option 1: Clone with Git (recommended)

1. Open your Local site and choose **Open Site Shell**, or open a terminal in your site's folder.
2. Move into the plugins folder:

   ```bash
   cd wp-content/plugins
   ```

3. Clone the repository. Replace the URL with your own repository's URL:

   ```bash
   git clone https://github.com/YOUR-USERNAME/cosw240-callout.git
   ```

4. In WordPress, go to **Plugins** and activate **COSW 240 Callout Block**.

### Option 2: Download a ZIP

1. On GitHub, click **Code > Download ZIP**.
2. Unzip it and rename the folder to `cosw240-callout` if needed.
3. Move the folder into `wp-content/plugins/` and activate the plugin.

## Using the Block

1. Edit any post or page.
2. Click the **+** block inserter and search for **Callout**.
3. Type your message into the block.
4. Save and view the page.

The saved content looks like this in the database:

```html
<!-- wp:cosw240/callout -->
<p class="wp-block-cosw240-callout">Remember to push before you leave.</p>
<!-- /wp:cosw240/callout -->
```

## Safe Changes vs. Breaking Changes

| Safe to change anytime | Breaks existing blocks if changed |
|---|---|
| `style.css` | The block `name` in `block.json` and `index.js` |
| `title`, `icon`, `category` in `block.json` | The HTML that `save()` outputs (tag or structure) |
| `placeholder` text in `index.js` | The `message` attribute's `source` or `selector` |
| Adding `styles` variations | |

If you change the saved HTML, blocks already on a page will show **"This block contains unexpected or invalid content."** Use `git log` and `git revert` to go back to the last working version.

## Git Practice Exercises

Work through these in order. Commit after each one with a clear message.

1. **First commit:** add this README and a `.gitignore`, then commit.

   ```bash
   git add .
   git commit -m "Add callout block scaffold"
   ```

2. **See a change:** change the border color in `style.css`, run `git diff`, then commit.
3. **Undo a mistake:** delete some CSS on purpose, then restore it:

   ```bash
   git restore style.css
   ```

4. **Branch and merge:** add a Warning style variation on its own branch.

   ```bash
   git switch -c warning-style
   ```

   Add this to `block.json`:

   ```json
   "styles": [
     { "name": "default", "label": "Note", "isDefault": true },
     { "name": "warning", "label": "Warning" }
   ]
   ```

   Add this to `style.css`:

   ```css
   .wp-block-cosw240-callout.is-style-warning {
     background-color: #fff5df;
     border-left-color: #c58a19;
   }
   ```

   Commit, then merge into `main`:

   ```bash
   git switch main
   git merge warning-style
   ```

5. **Push and pull:** push to GitHub, clone on a second computer, make a change there, push it, and pull it back on the first computer.

## Daily Routine

```bash
# When you start working
git pull

# Before you leave
git status
git add .
git commit -m "Describe what you changed"
git push
```

**Pull before you work. Push before you leave.**

## Suggested .gitignore

```gitignore
# Operating system files
.DS_Store
Thumbs.db

# Editor settings
.vscode/

# Never commit these
*.zip
*.log
.env
```

## Course

Created for **COSW 240: WordPress** at Long Beach City College.

- Course site: [cosw240.webdevlearning.org](https://cosw240.webdevlearning.org)
- Author: Alex Green

This plugin is for learning purposes only. It is not intended for use on production sites.
