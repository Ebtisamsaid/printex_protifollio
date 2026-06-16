export default async function sitemap() {
  const baseUrl = 'https://www.printexegy.com/ar';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
   
  ];
}
