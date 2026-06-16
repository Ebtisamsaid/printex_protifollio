export default async function sitemap() {
  const baseUrl = 'https://printexegy.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
   
  ];
}
