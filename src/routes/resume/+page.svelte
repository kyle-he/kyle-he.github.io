<script>
    import Metadata from "$lib/components/Metadata.svelte";
    import { base } from '$app/paths';
</script>

<Metadata
    meta={{
        title: "Kyle He - Resume",
        description: "my resume",
    }}
/>

<head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
</head>

<main>
    <p class="font-serif text-base text-left mt-8">
        If you prefer a PDF, you can view it <a href="{base}/kylehe_resume.pdf" class="text-blue-500 hover:underline">here.</a>
    </p>

    <section class="mt-8 font-serif">
        <h2 class="text-2xl font-semibold">Education</h2>
        <div class="mt-4">
            <div class="flex justify-between items-center">
                <p class="font-semibold">
                    University of Southern California
                </p>
                <p class="text-gray-600">2025 - 2026</p>
            </div>
            <p><i>M.S. in Computer Science</i></p>
            <div class="flex justify-between items-center">
                <p class="font-semibold">
                    University of Southern California
                </p>
                <p class="text-gray-600">2022 - 2026</p>
            </div>
            <p><i>B.S. in Computer Science</i></p>
        </div>
        <ul class="list-disc ml-6 mt-2">
            <li>GPA: 3.9/4.0</li>
            <li>Course Producer for CSCI 170 (Discrete Math)</li>
        </ul>
    </section>

    <section class="mt-8 font-serif">
        <h2 class="text-2xl font-semibold">Experience</h2>
        <div class="mt-4">
            <div class="mb-4">
                <p class="font-semibold">SWE Intern @ Meta</p>
                <p class="text-gray-600">June 2026 - August 2026<i class="fas fa-circle text-[4px] mx-2 align-middle"></i>New York City, NY</p>
                <ul class="list-disc ml-6 mt-2">
                    <li>TBD</li>
                </ul>
            </div>

            <div class="mb-4">
                <p class="font-semibold">SWE Intern @ Bloomberg</p>
                <p class="text-gray-600">June 2025 - August 2025<i class="fas fa-circle text-[4px] mx-2 align-middle"></i>New York City, NY</p>
                <ul class="list-disc ml-6 mt-2">
                    <li>Wrote C++ for Bloomberg's market data pipelines.</li>
                </ul>
            </div>

            <div class="mb-4">
                <p class="font-semibold">SWE Intern @ VMware</p>
                <p class="text-gray-600">June 2025 - August 2025<i class="fas fa-circle text-[4px] mx-2 align-middle"></i>Remote</p>
                <ul class="list-disc ml-6 mt-2">
                    <li>Built some ML models to identify duplicate bug reports.</li>
                </ul>
            </div>
        </div>
    </section>
</main>
