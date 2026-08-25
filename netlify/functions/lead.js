export default async (req) => {
  const datos = await req.json();

  if (datos.website) return new Response('ok', { status: 200 });

  console.log('KEY presente:', !!process.env.WEB3FORMS_KEY);

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: process.env.WEB3FORMS_KEY,
      subject: `Nuevo lead: ${datos.nombre}`,
      ...datos,
    }),
  });

  const texto = await res.text();
  console.log('Status:', res.status);
  console.log('Respuesta:', texto.slice(0, 400));

  return new Response(JSON.stringify({ ok: res.ok }), { status: res.ok ? 200 : 500 });
};

export const config = { path: '/api/lead' };