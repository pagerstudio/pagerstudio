import { google } from "googleapis";
import { readFileSync } from "fs";

const keyFile = "./service-account.json";
const siteUrl = "https://pagerstudio.space";

async function getAuthClient() {
  const creds = JSON.parse(readFileSync(keyFile, "utf-8"));
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: creds.client_email,
      private_key: creds.private_key,
    },
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });
  return auth;
}

async function requestIndexing(url, auth) {
  const indexing = google.indexing({ version: "v3", auth });
  try {
    const res = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: "URL_UPDATED",
      },
    });
    console.log(`✓ ${url} — ${res.data.notificationType}`);
    return { url, success: true };
  } catch (err) {
    const msg = err.errors?.[0]?.message || err.message;
    console.error(`✗ ${url} — ${msg}`);
    return { url, success: false, error: msg };
  }
}

async function main() {
  const urls = process.argv.slice(2);

  if (urls.length === 0) {
    console.log("Usage: node scripts/request-indexing.mjs <url1> <url2> ...");
    console.log("Example: node scripts/request-indexing.mjs https://pagerstudio.space/ https://pagerstudio.space/pricing");
    console.log("\nFetching all URLs from sitemap...");

    const res = await fetch(`${siteUrl}/sitemap.xml`);
    const xml = await res.text();
    const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
    urls.push(...matches.map((m) => m[1]));
    console.log(`Found ${urls.length} URLs in sitemap\n`);
  }

  const auth = await getAuthClient();

  let success = 0;
  let failed = 0;

  for (const url of urls) {
    const result = await requestIndexing(url, auth);
    if (result.success) success++;
    else failed++;
  }

  console.log(`\nDone: ${success} requested, ${failed} failed`);
}

main();
