// Drop-in analytics — add env NEXT_PUBLIC_GA_ID or Plausible domain and uncomment.
// Keeps bundle zero when not configured.

export function Analytics() {
  // const gaId = process.env.NEXT_PUBLIC_GA_ID;
  // if (!gaId) return null;
  // return (
  //   <>
  //     <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
  //     <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}</Script>
  //   </>
  // );
  return null;
}
