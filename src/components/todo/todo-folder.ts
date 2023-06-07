import {Folder} from '../main.ts'

export default function (folders: Folder[]): string {
    return `
        <ul>
            ${getFolders(folders)}
        </ul>
    `
}

function getFolders(folders: Folder[]) {
    let _fldrs: string = "";
    for (const fldr of folders) {
        _fldrs += `<li data-id=${fldr.id}>${fldr.name}</li>\n`;
    }

    return _fldrs;
}