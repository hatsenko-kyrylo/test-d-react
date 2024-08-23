import dbx from './dropboxApi';

async function fetchFiles(path) {
    try {
        const response = await dbx.filesListFolder({ path });
        return response.result.entries;
    } catch (error) {
        console.error('Error fetching files:', error);
        throw error;
    }
}

async function uploadFile(file, path) {
    try {
        const response = await dbx.filesUpload({
            path: `${path}/${file.name}`,
            contents: file,
            mode: 'add',
            autorename: true,
        });
        return response;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
}

export { fetchFiles, uploadFile };
