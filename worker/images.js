async function handleRequest(request) {
  const url = new URL(request.url);
  const objName = url.pathname.split('/')[2];
  console.log(`${request.method} object ${objName}: ${request.url}`);

  switch (request.method) {
    case "GET":
      const obj = await R2.get(objName)
      console.log(JSON.stringify(obj));
      const body = await obj.body;
      const blob = await obj.blob;
      return new Response(blob, {
        headers: {
          'content-type': obj.metadata.contentType,
          'eTag': obj.metadata.eTag,
          'key': obj.key
        },
      });
  }
};

addEventListener('fetch', (event) => {
  return event.respondWith(handleRequest(event.request));
});