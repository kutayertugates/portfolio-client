<script setup></script>

<template>
  <section
    aria-labelledby="about_approach_title"
    class="border-b border-zinc-200 dark:border-zinc-800"
  >
    <div
      class="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28"
    >
      <div class="lg:col-span-7">
        <p class="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
          01 — Yaklaşım
        </p>

        <h2
          id="about_approach_title"
          class="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
        >
          Önce problemi anlamak, sonra ihtiyaç kadar mimari kurmak.
        </h2>

        <div class="mt-8 max-w-xl space-y-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          <p>
            Bir projeye başlarken ilk sorduğum şey genellikle "bu sistem neyi başarmalı" olur.
            Teknoloji seçimi bu cevaptan sonra gelir. Kullanılmayan bir soyutlama, ilk gün fark
            edilmese de her sürümde biraz daha pahalıya mal olan bir borçtur.
          </p>
          <p>
            Web tarafında Vue ve Node.js ile hızlı açılan, bakımı kolay uygulamalar kuruyorum.
            Gömülü tarafta C/C++ ile sınırlı kaynakta çalışan firmware geliştiriyorum. Aynı ürünün
            iki ucunu da görebilmek, entegrasyon sırasında ortaya çıkan varsayımları en baştan
            azaltıyor.
          </p>
          <p>
            Teslim ettiğim işin anlaşılır olmasını önemsiyorum: kısa dokümantasyon, okunabilir kod
            ve tekrarlanabilir bir kurulum. Projeyi devralan kişinin ilk gün takılmaması, tasarım
            kararlarının gerçekten doğru olduğunun en net göstergesi.
          </p>
        </div>
      </div>

      <aside class="lg:col-span-5">
        <figure
          class="rounded-md border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <blockquote
            class="text-xl font-medium leading-8 text-zinc-900 dark:text-zinc-50"
          >
            İyi mimari, ihtiyaçtan fazlasını değil; ihtiyacı tam karşılayanı kurmaktır.
          </blockquote>

          <figcaption class="mt-8 border-t border-zinc-200 pt-5 dark:border-zinc-800">
            <p class="font-mono text-xs uppercase tracking-widest text-zinc-500">
              Çalışma prensibi
            </p>
            <p class="mt-2 font-mono text-xs text-zinc-500">kutayertug.com</p>
          </figcaption>
        </figure>
      </aside>
    </div>
  </section>
</template>
