<script>
    /** @type {import('./$types').LayoutData} */
    //export let data;
</script>

<header class="p-4 pt-0 flex justify-center w-full">
    <div class="p-6 px-10 bg-blue-600 rounded-b-3xl border-b-4 border-r-4 border-blue-800">
        <h1>Proyecto <span class="text-red-400 italic">DISECT</span></h1>
    </div>
</header>

<div class="p-8 flex flex-col gap-16 items-center">
    <slot/>
</div>

<footer class="border-t-[1px] border-neutral-700 p-16 mt-24 bg-neutral-800 flex gap-24 flex-wrap justify-center">
    <div>
        Contacto: +34 681293113
    </div>
    <div>
        <h4 class="font-bold text-lg">Proyecto DISECT</h4>
    </div>
    <div>
        <a href="https://github.com/elarle/disect-page" class="text-indigo-400 underline">Repositorio de github</a>
    </div>
</footer>