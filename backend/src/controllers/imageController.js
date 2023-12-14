const path = require('path');
const fs = require('fs');
const { bucket } = require('../firebase');


const uploadImage = async (req, res) => {
    console.log('body', req.body);
    console.log('imagenes', req.files);
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No se ha enviado ninguna imagen.');
    }

    const image = req.files.image;
    const uploadPath = path.join(__dirname, 'uploads', image.name);

    // Mueve el archivo al directorio de subidas
    image.mv(uploadPath, async (err) => {
        if (err) {
            return res.status(500).send(err);
        }

        // Sube la imagen al almacenamiento de Firebase
        const remotePath = `images/${image.name}`;
        const dataImage = await bucket.upload(uploadPath, { destination: remotePath });
        console.log('dataImage', dataImage);

        // Elimina el archivo local después de subirlo a Firebase
        fs.unlinkSync(uploadPath);

        res.send('Imagen subida y almacenada en Firebase exitosamente');
    });
}

    const showImage = async (req, res) => {
        const options = {
            version: 'v2',
            action: 'read',
            expires: Date.now() + 1000 * 60 * 60
        };
        const filePath = `images/${req.params.name}`;
        const [url] = await bucket.file(filePath).getSignedUrl(options);

        res.send(url);
    };
    



module.exports = {
    uploadImage,
    showImage
}