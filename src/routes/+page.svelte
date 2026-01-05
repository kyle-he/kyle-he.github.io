<script>
  import Metadata from "$lib/components/Metadata.svelte";
  import { base } from "$app/paths";

  // Calculate exact age in years since November 7, 2004 in Mountain View (PST/PDT)
  function calculateAgeInYears() {
    const birthDate = new Date("2004-11-07T00:00:00-08:00"); // Mountain View timezone (PST)
    const now = new Date();
    const diffInMs = now - birthDate;
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25); // Account for leap years
    return diffInYears.toFixed(5);
  }

  const ageInYears = calculateAgeInYears();
</script>

<Metadata
  meta={{
    title: "Kyle He",
    description: "Kyle He's personal website",
  }}
/>

<main>
  <p class="font-serif text-base text-left mt-12">
    Hello! I'm <span class="font-mono text-sm" >{ageInYears}</span> years old and I live in
    Los Angeles, where I am studying Computer Science at USC. Previously, I have
    lived in San Jose (hometown), New York City (two summers), and Shanghai (until
    I was ~5).
  </p>

  <section class="mt-8">
    <h2 class="font-serif text-2xl font-semibold text-left">Find me here</h2>
    <ul class="font-serif text-base text-left mt-4">
      <li class="mt-2 flex items-center">
        <i class="fab fa-github text-blue-700 mr-2"></i>
        <a href="https://github.com/kyle-he" class="link-highlight"
          >github (kyle-he)</a
        >
      </li>
      <li class="mt-2 flex items-center">
        <i class="fab fa-linkedin text-blue-700 mr-2"></i>
        <a href="https://linkedin.com/in/kyle-he" class="link-highlight"
          >linkedin (kyle-he)</a
        >
      </li>
      <li class="mt-2 flex items-center">
        <i class="fab fa-instagram text-blue-700 mr-2"></i>
        <a href="https://instagram.com/keelay.he" class="link-highlight"
          >instagram (keelay.he)</a
        >
      </li>
      <li class="mt-2 flex items-center">
        <i class="fas fa-utensils text-blue-700 mr-2"></i>
        <a href="https://beliapp.co/app/keelay" class="link-highlight"
          >beli (keelay)</a
        >
      </li>
      <li class="mt-2 flex items-center">
        <i class="fab fa-spotify text-blue-700 mr-2"></i>
        <a
          href="https://open.spotify.com/user/12147947115?si=68e0208a1bee4749"
          class="link-highlight">spotify (kyle he)</a
        >
      </li>
      <li class="mt-2 flex items-center">
        <i class="fas fa-clapperboard text-blue-700 mr-2"></i>
        <a href="https://letterboxd.com/kylehe/" class="link-highlight"
          >letterboxd (kylehe)</a
        >
      </li>
    </ul>
  </section>

  <section class="mt-8">
    <h2 class="font-serif text-2xl font-semibold text-left">Contact</h2>
    <p class="font-serif text-base text-left mt-4">
      Feel free to email me anything at: kylehe04@gmail.com
    </p>
  </section>
</main>
