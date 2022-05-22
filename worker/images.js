async function handleRequest(request) {
  const url = new URL(request.url);
  const objectName = url.pathname.split('/')[2];
  console.log(`${request.method} object ${objectName}: ${request.url}`);

  switch (request.method) {
    case "GET":
      const object = await R2.get(objectName)
      console.log(JSON.stringify(object));
      const body = await object.body;
      const blob = await object.blob;
      return new Response(blob, {
        headers: {
          'content-type': object.metadata.contentType,
          'eTag': object.metadata.eTag,
          'key': object.key
        },
      });
  }
};

addEventListener('fetch', (event) => {
  return event.respondWith(handleRequest(event.request));
});


// https://community.cloudflare.com/t/returned-r2-object-in-worked-does-not-include-body/383040/4
// https://why2point4-images.hughobrien.workers.dev/images/DSC_1787-1k.jpg.webp
// https://why2point4-images.hughobrien.workers.dev/images/1601.pdf
