## Deezer Now Playing Project Documentation

### Table of Contents
1. [Project Overview](#project-overview)
2. [Requirements](#requirements)
3. [Setup and Installation](#setup-and-installation)
4. [Usage](#usage)
5. [File Structure](#file-structure)
6. [Troubleshooting](#troubleshooting)
7. [Translation](#translation)

### Project Overview
The Deezer Now Playing project displays the currently playing track on your Deezer account. It shows the album cover, track title, artist name, and track progress using the Deezer JavaScript SDK.

### Requirements
- Deezer Developer Account
- Deezer App ID
- Web server (e.g., Apache, Live Server for VS Code)
- Modern web browser

### Setup and Installation
1. **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```
2. **Navigate to the project directory:**
    ```bash
    cd deezer-now-playing
    ```
3. **Start the web server:**
   - For Live Server on VS Code, right-click on `index.html` and select "Open with Live Server".
   - For Apache, ensure the project files are placed in the appropriate directory (e.g., `/var/www/html`).

4. **Configure Deezer App:**
   - Ensure you have your Deezer App ID.
   - Replace the `appId` in `script.js` with your Deezer App ID.
   - Replace the `redirectUri` in `script.js` with the URL where your project is hosted.

### Usage
1. Open the project URL in your web browser.
2. Click the "Connectez-vous à Deezer" button to log in to your Deezer account.
3. After logging in, the current track information will be displayed, including the album cover, track title, artist name, and track progress.

### File Structure
- `index.html`: Main HTML file for the project.
- `channel.html`: Channel file required by Deezer SDK.
- `script.js`: JavaScript file that initializes Deezer SDK and handles player interactions.
- `styles.css`: CSS file for styling the project.

### Troubleshooting
- **Player not showing:** Ensure that the Deezer App ID and redirect URI are correctly set.
- **No track information:** Make sure the Deezer player is initialized and playing a track.
- **Login issues:** Verify that the correct permissions are requested and granted during login.

---

## Traduction Française du Projet Deezer Now Playing

### Table des matières
1. [Aperçu du projet](#aperçu-du-projet)
2. [Exigences](#exigences)
3. [Configuration et installation](#configuration-et-installation)
4. [Utilisation](#utilisation)
5. [Structure des fichiers](#structure-des-fichiers)
6. [Dépannage](#dépannage)

### Aperçu du projet
Le projet Deezer Now Playing affiche la piste actuellement en cours de lecture sur votre compte Deezer. Il montre la pochette de l'album, le titre de la piste, le nom de l'artiste et la progression de la piste en utilisant le SDK JavaScript de Deezer.

### Exigences
- Compte développeur Deezer
- ID de l'application Deezer
- Serveur web (par exemple, Apache, Live Server pour VS Code)
- Navigateur web moderne

### Configuration et installation
1. **Cloner le dépôt:**
    ```bash
    git clone <repository_url>
    ```
2. **Naviguer vers le répertoire du projet:**
    ```bash
    cd deezer-now-playing
    ```
3. **Démarrer le serveur web:**
   - Pour Live Server sur VS Code, faites un clic droit sur `index.html` et sélectionnez "Open with Live Server".
   - Pour Apache, assurez-vous que les fichiers du projet sont placés dans le répertoire approprié (par exemple, `/var/www/html`).

4. **Configurer l'application Deezer:**
   - Assurez-vous d'avoir votre ID d'application Deezer.
   - Remplacez `appId` dans `script.js` par votre ID d'application Deezer.
   - Remplacez `redirectUri` dans `script.js` par l'URL où votre projet est hébergé.

### Utilisation
1. Ouvrez l'URL du projet dans votre navigateur web.
2. Cliquez sur le bouton "Connectez-vous à Deezer" pour vous connecter à votre compte Deezer.
3. Après vous être connecté, les informations sur la piste en cours seront affichées, y compris la pochette de l'album, le titre de la piste, le nom de l'artiste et la progression de la piste.

### Structure des fichiers
- `index.html`: Fichier HTML principal du projet.
- `channel.html`: Fichier de canal requis par le SDK Deezer.
- `script.js`: Fichier JavaScript qui initialise le SDK Deezer et gère les interactions avec le lecteur.
- `styles.css`: Fichier CSS pour le style du projet.

### Dépannage
- **Le lecteur ne s'affiche pas:** Assurez-vous que l'ID de l'application Deezer et l'URI de redirection sont correctement définis.
- **Pas d'informations sur la piste:** Assurez-vous que le lecteur Deezer est initialisé et lit une piste.
- **Problèmes de connexion:** Vérifiez que les autorisations correctes sont demandées et accordées lors de la connexion.
