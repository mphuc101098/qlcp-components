(function () {

const CDN_BASE =
"https://cdn.jsdelivr.net/gh/mphuc101098/qlcp-components@main/";

function loadScript(url) {
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = url;
    s.onload = resolve;
    document.head.appendChild(s);
  });
}

async function loadComponents() {

  const registry = await fetch(CDN_BASE + "registry.json")
    .then(r => r.json());

  const required = window.FUI_COMPONENTS || [];

  for (let name of required) {

    if (!registry[name]) {
      console.warn("FUI component not found:", name);
      continue;
    }

    const url = CDN_BASE + registry[name];

    await loadScript(url);

    console.log("FUI component loaded:", name);

  }

}

loadComponents();

})();
