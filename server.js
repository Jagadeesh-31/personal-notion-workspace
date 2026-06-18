const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');
const querystring = require('querystring');

const PORT = 8000;
const PUBLIC_DIR = __dirname;
const STATE_PATH = path.join(PUBLIC_DIR, 'state.json');

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.json': 'application/json'
};

const server = http.createServer((req, res) => {
    let safeUrl = req.url.split('?')[0];
    
    // API endpoint: Save current workspace state to state.json
    if (safeUrl === '/api/save-state' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                fs.writeFileSync(STATE_PATH, body, 'utf8');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: err.message }));
            }
        });
        return;
    }

    // API endpoint: Load current workspace state from state.json
    if (safeUrl === '/api/load-state' && req.method === 'GET') {
        try {
            if (fs.existsSync(STATE_PATH)) {
                const data = fs.readFileSync(STATE_PATH, 'utf8');
                res.writeHead(200, { 
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache, no-store, must-revalidate'
                });
                res.end(data);
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: 'State file not found' }));
            }
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: err.message }));
        }
        return;
    }

    // Serve static assets
    if (safeUrl === '/') safeUrl = '/index.html';
    const filePath = path.join(PUBLIC_DIR, safeUrl);

    const extname = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
            }
        } else {
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            });
            res.end(content, 'utf-8');
        }
    });
});

function readState() {
    if (!fs.existsSync(STATE_PATH)) return {};
    return JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
}

function writeState(state) {
    fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2), 'utf8');
}

server.listen(PORT, () => {
    console.log(`\n🚀 Notion Study Workspace is live!\n`);
    console.log(`Open in your browser: http://localhost:${PORT}/`);
    console.log(`Press Ctrl+C in this terminal to stop the server.\n`);
});
