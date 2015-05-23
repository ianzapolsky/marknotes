# marknotes

marknotes is my home-spun solution for everyday note taking.

If you fit the following description, you will probably love marknotes:
  1. You spend a lot of time at the terminal.
  2. You love editing text in vim, emacs, or another terminal-based text editor.
  3. You know how to use Markdown

marknotes makes it easy to create notes written in markdown and then view them as converted HTML in your browser.

# installation

### clone the repository and install dependencies

```
git clone https://github.com/ianzapolsky/marknotes.git
cd marknotes
npm install
```

### add the following to your .bashrc

```
export MARKDOWN_HOME='/path/to/marknotes'
export PATH=$PATH:$MARKDOWN_HOME/bin
```

### begin using marknotes

- **nn**: Creates a new note and opens it for editing.
- **vn**: Opens the directory containing your notes in vim, so you can easily edit or delete existing notes.
- **nb**: Starts the notes server, a small Node/Express.js app, and opens it in your browser.


