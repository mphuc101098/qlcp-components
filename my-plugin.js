
  const IMPORT_COMPONENTS = [
    // "phuc-test",
    "com31",
    "todo-app"
  ];

  const CDN_BASE =
    "https://gh.lhu.edu.vn/mphuc101098/qlcp-components/main/";


  function loadScript(url) {
    return new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = url;
      s.onload = resolve;
      document.body.appendChild(s);
    });
  }

  async function loadComponents() {

    const registry = await fetch(CDN_BASE + "registry.json")
      .then(r => r.json());

    const required = IMPORT_COMPONENTS || [];

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


