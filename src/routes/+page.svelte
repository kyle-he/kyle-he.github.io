<script>
  import Metadata from "$lib/components/Metadata.svelte";
</script>

<Metadata
  meta={{
      title: "Kyle He",
      description: "Kyle He's personal website",
  }}
/>

<main>
  <p class="font-serif text-base text-left mt-12">
    I'm currently a student at the USC studying Computer Science. 
  </p>

  <section class="mt-8">
    <h2 class="font-serif text-2xl font-semibold text-left">Find me here</h2>
    <ul class="font-serif text-base text-left mt-4">
      <li class="mt-2 flex items-center">
        <i class="fab fa-github text-blue-700 mr-2"></i>
        <a
          href="https://github.com/kyle-he"
          class="link-highlight"
          >github (kyle-he)</a
        >
      </li>
      <li class="mt-2 flex items-center">
        <i class="fab fa-linkedin text-blue-700 mr-2"></i>
        <a
          href="https://linkedin.com/in/kyle-he"
          class="link-highlight"
          >linkedin (kyle-he)</a
        >
      </li>
      <li class="mt-2 flex items-center">
        <i class="fab fa-instagram text-blue-700 mr-2"></i>
        <a
          href="https://instagram.com/keelay.he"
          class="link-highlight"
          >instagram (keelay.he)</a
        >
      </li>
      <li class="mt-2 flex items-center">
        <i class="fas fa-utensils text-blue-700 mr-2"></i>
        <a
          href="https://beliapp.co/app/keelay"
          class="link-highlight"
          >beli (keelay)</a
        >
      </li>
      <li class="mt-2 flex items-center">
        <i class="fab fa-spotify text-blue-700 mr-2"></i>
        <a
          href="https://open.spotify.com/user/12147947115?si=68e0208a1bee4749"
          class="link-highlight"
          >spotify (kyle he)</a
        >
      </li>
    </ul>
  </section>

  <section class="mt-8">
    <h2 class="font-serif text-2xl font-semibold text-left">Contact</h2>
    <p class="font-serif text-base text-left mt-4">
      Email:
      <a
        href="mailto:kphe@usc.edu?body=Hi%20Kyle%2C%0A"
        class="link-highlight"
      >
        kphe@usc.edu
      </a>
    </p>
  </section>
</main>
