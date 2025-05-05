import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import React from 'react';
import { marked } from 'marked';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Leia nossa política de privacidade.'
};

async function getPrivacyPolicyMarkdown() {
  const filePath = path.join(process.cwd(), 'politica-de-privacidade.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return fileContents;
}

export default async function PoliticaDePrivacidadePage() {
  const markdown = await getPrivacyPolicyMarkdown();
  const html = marked.parse(markdown);
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 prose prose-neutral dark:prose-invert">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}