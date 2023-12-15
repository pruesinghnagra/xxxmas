import fs from 'fs';

function adventReadFiles(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            
            const fileArray = data.split('\n');
            resolve(fileArray)
        });
    })
}

export async function callAdventReadFiles(fileInput) {
    try {
        const input = await adventReadFiles(fileInput)
        return input;
    } catch (error) {
        console.error('Error:', error)
    }
}
