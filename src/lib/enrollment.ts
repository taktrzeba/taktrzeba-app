import { google } from 'googleapis';

export interface EnrollmentPayload {
  parentName: string;
  email: string;
  childAge: string;
  city: string;
  preferredWorkshop: string;
  consent: boolean;
  source: string;
  website?: string;
}

export function validateEnrollmentPayload(payload: unknown): {
  valid: boolean;
  errors: string[];
  data?: EnrollmentPayload;
} {
  const errors: string[] = [];

  if (!payload || typeof payload !== 'object') {
    return { valid: false, errors: ['Invalid payload'] };
  }

  const data = payload as Partial<EnrollmentPayload>;

  if (!data.parentName || data.parentName.trim().length < 3) {
    errors.push('Invalid parentName');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Invalid email');
  }

  if (!data.childAge || !['14', '15', '16'].includes(data.childAge)) {
    errors.push('Invalid childAge');
  }

  if (!data.city || data.city.trim().length < 2) {
    errors.push('Invalid city');
  }

  if (!data.preferredWorkshop || data.preferredWorkshop.trim().length < 3) {
    errors.push('Invalid preferredWorkshop');
  }

  if (data.consent !== true) {
    errors.push('Consent is required');
  }

  if (!data.source || data.source.trim().length < 2) {
    errors.push('Invalid source');
  }

  if (data.website && data.website.trim().length > 0) {
    errors.push('Spam detected');
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: [],
    data: {
      parentName: data.parentName!.trim(),
      email: data.email!.trim().toLowerCase(),
      childAge: data.childAge!,
      city: data.city!.trim(),
      preferredWorkshop: data.preferredWorkshop!.trim(),
      consent: true,
      source: data.source!.trim(),
      website: data.website,
    },
  };
}

export function getSheetsConfig() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const worksheetName = process.env.GOOGLE_SHEETS_WORKSHEET_NAME;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!spreadsheetId || !worksheetName || !clientEmail || !privateKey) {
    throw new Error('Missing Google Sheets configuration');
  }

  return {
    spreadsheetId,
    worksheetName,
    clientEmail,
    privateKey,
  };
}

export async function appendEnrollmentToSheet(payload: EnrollmentPayload): Promise<void> {
  const { spreadsheetId, worksheetName, clientEmail, privateKey } = getSheetsConfig();

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const row = [
    new Date().toISOString(),
    payload.parentName,
    payload.email,
    payload.childAge,
    payload.city,
    payload.preferredWorkshop,
    payload.source,
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${worksheetName}!A:G`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [row],
    },
  });
}
