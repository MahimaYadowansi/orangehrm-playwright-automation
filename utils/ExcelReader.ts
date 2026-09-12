import * as XLSX from 'xlsx';

export function readExcel(
    filePath: string,
    sheetName: string
): any[] {

    // Read Excel file synchronously
    const workbook = XLSX.readFile(filePath);

    // Get worksheet
    const worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
        throw new Error(
            `Sheet "${sheetName}" not found. Available sheets: ${workbook.SheetNames.join(', ')}`
        );
    }

    // Convert worksheet into JSON
    const data = XLSX.utils.sheet_to_json(worksheet, {
        defval: ''
    });

    return data;
}