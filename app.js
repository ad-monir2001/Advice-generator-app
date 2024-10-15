const getData = async () => {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  getQuote(data.slip);
};
getData();

const getQuote = (data) => {
  const { id, advice } = data;
  const dataContainer = document.getElementById('container');
  dataContainer.innerHTML = `
  
  <div
        class="px-8 py-4 bg-[#323a49] w-[400px] rounded-lg text-center space-y-4 relative flex flex-col items-center"
      >
        <p class="text-[#52ffa8] font-medium text-xs tracking-widest">
          ADVICE #${id}
        </p>
        <h1 class="font-semibold text-2xl text-[#cee3e9]">
          "${advice}"
        </h1>
        <img class="py-5" src="images/pattern-divider-desktop.svg" alt="" />
        <button
          onclick="getData()"
          class="bg-[#52ffa8] p-2 rounded-full w-8 absolute -bottom-4"
        >
          <img class="w-6" src="images/icon-dice.svg" alt="" />
        </button>
      </div>
  
  `;
};
