async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const file = url.pathname.split('/')[2];
  const target = `https://images.why2point4.com/file/why2point4/${file}`;
  const response = await fetch(target);
  return new Response(response);
};
