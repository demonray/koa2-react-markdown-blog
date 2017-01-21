import markdown from 'markdown-it'
import path from 'path'
import { readFile, readDir, getMarkdownData } from '../services/mdservice'

const mkFilesPath = path.resolve(__dirname, '../articals');

async function getAticalsData(files) {
    let fileInfos = files.map((file) => {
        return {
            articalId: path.parse(file).name,
            promise: readFile(file)
        }
    });
    let results = [];
	for (let fileInfo of fileInfos) {
		console.log(fileInfo)
	    let file,filestr;
	    file = await fileInfo.promise;
	    filestr = file.toString();
	    let fileData = getMarkdownData(filestr);
	    if(fileData&&fileData.metaData){
	    	fileData.metaData.articalId = fileInfo.articalId;
	    }
	    results.push(fileData.metaData);
	}
	return results;
}

export default async(ctx, next) => {
    let files = await readDir(mkFilesPath),filePaths = [],articals;
    files.forEach((item) => {
        filePaths.push(path.join(mkFilesPath, item));
    })
    articals = await getAticalsData(filePaths);
    ctx.body = {
    	articals:articals
    }
}
