<template>
  <div class="nova min-h-screen flex flex-col bg-[var(--nova-bg)]">
    <NavigationBar />

    <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-hidden">
      <!-- Header & Watchlist Selector -->
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div class="flex-shrink-0">
              <h1 class="nova-h1 mb-1" style="color: var(--nova-text)">My Watchlists</h1>
              <p class="text-sm" style="color: var(--nova-text-muted)">Monitor the health of your potential positions.</p>
          </div>

          <!-- Watchlist Tabs -->
          <div class="flex-1 md:flex-initial min-w-0 max-w-full">
              <div class="flex items-center p-1 rounded-xl border overflow-x-auto no-scrollbar" style="background-color: var(--nova-bg-alt); border-color: var(--nova-border-strong)">
                  <div class="flex" v-if="model.portfolios.length > 0">
                    <button 
                        v-for="list in model.portfolios" 
                        :key="list.id"
                        @click="selectPortfolio(list.id)"
                        class="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-2 flex-shrink-0"
                        :class="model.currentPortfolioId === list.id ? 'active-tab' : 'inactive-tab'"
                    >
                        <span>{{ list.name }}</span>
                    </button>
                  </div>
                  <div v-else class="px-4 py-2 text-sm text-muted">No watchlists</div>
                  
                  <button @click="showCreateListModal = true" class="px-3 py-2 transition-colors ml-1 flex-shrink-0" style="color: var(--nova-text-muted)" title="Create New List">
                      <span class="text-xl">+</span>
                  </button>
              </div>
          </div>
      </div>

      <!-- Toolbar -->
      <div class="flex flex-col lg:flex-row items-center justify-between mb-6 gap-4 p-4 rounded-xl border border-dashed" style="background-color: var(--nova-bg-alt); border-color: var(--nova-border)">
           <div class="relative w-full lg:w-80">
              <input 
                  v-model="symbolSearch"
                  @keyup.enter="addSymbol"
                  type="text" 
                  placeholder="Add symbol (e.g. AAPL)..." 
                  class="w-full border rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 transition-all placeholder-opacity-50"
                  style="background-color: var(--nova-bg); color: var(--nova-text); border-color: var(--nova-border); --tw-ring-color: var(--nova-accent)"
              >
              <span class="absolute left-3.5 top-2.5" style="color: var(--nova-text-muted)">:mag:</span>
              <button 
                  v-if="symbolSearch"
                  @click="addSymbol"
                  class="absolute right-2 top-1.5 text-xs px-2 py-1 rounded transition-colors"
                  style="background-color: var(--nova-accent); color: var(--nova-text-inverse)"
              >
                  Add
              </button>
          </div>

          <!-- Sort & List Actions -->
          <div class="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
               <!-- Sort -->
               <div class="flex items-center gap-2 w-full sm:w-auto p-1 rounded-lg border" style="background-color: var(--nova-bg); border-color: var(--nova-border)">
                   <span class="text-[10px] uppercase tracking-wider font-bold ml-2 mr-1" style="color: var(--nova-text-muted)">Sort</span>
                   <select v-model="sortKey" class="bg-transparent text-sm font-medium focus:outline-none cursor-pointer pr-1" style="color: var(--nova-text)">
                       <option value="symbol">Ticker</option>
                       <option value="trendScore">Health</option>
                       <option value="earningsDate">Earnings</option>
                       <option value="change">PL %</option>
                   </select>
                   <div class="w-px h-4 mx-1" style="background-color: var(--nova-divider)"></div>
                   <button 
                       @click="sortDesc = !sortDesc" 
                       class="p-1.5 rounded transition-colors"
                       style="color: var(--nova-text-muted)"
                   >
                       {{ sortDesc ? '↓' : '↑' }}
                   </button>
               </div>

                <!-- Actions -->
                <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button @click="openRenameModal" class="px-3 py-2 rounded-lg transition-colors text-sm flex items-center gap-2 hover-bg-alt" style="color: var(--nova-text-muted)">
                        <span>Rename</span>
                    </button>
                    <button @click="deleteCurrentList" class="px-3 py-2 rounded-lg transition-colors text-sm flex items-center gap-2 hover:bg-red-900/10" style="color: var(--nova-text-muted)">
                        <span>Delete</span>
                    </button>
                </div>
          </div>
      </div>

       <!-- Empty State -->
       <div v-if="sortedAnalyzers.length === 0 && !model.busy" class="text-center py-20 rounded-2xl border" style="background-color: var(--nova-bg-alt); border-color: var(--nova-border)">
            <h3 class="text-lg font-medium" style="color: var(--nova-text)">This watchlist is empty</h3>
            <p class="mt-2 max-w-sm mx-auto" style="color: var(--nova-text-muted)">Start building your portfolio strategy by adding symbols above.</p>
       </div>

       <div v-if="model.busy" class="text-center py-20" style="color: var(--nova-text-muted)">
          Loading...
       </div>

       <!-- Grid -->
       <div 
            v-else
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative"
       >
            <WatchlistCard 
                v-for="analyzer in sortedAnalyzers" 
                :key="analyzer.s.underlying_symbol" 
                :analyzer="analyzer"
                @click="goToStock(analyzer.s.underlying_symbol)"
                @remove="model.removeSymbolFromWatchlist(analyzer.s.underlying_symbol, model.currentPortfolioId)"
            />
       </div>

    </main>

    <!-- Modals -->
    <div v-if="showCreateListModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
        <div class="rounded-2xl p-6 w-full max-w-sm border shadow-2xl" style="background-color: var(--nova-bg-elevated); border-color: var(--nova-border)">
            <h3 class="text-xl font-bold mb-4" style="color: var(--nova-text)">New Watchlist</h3>
            <input 
                v-model="newListName"
                type="text" 
                placeholder="E.g., High Dividend..." 
                class="w-full border rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2"
                style="background-color: var(--nova-bg); color: var(--nova-text); border-color: var(--nova-border); --tw-ring-color: var(--nova-accent)"
                @keyup.enter="createWatchlist"
            >
            <div class="flex gap-3">
                <button @click="showCreateListModal = false" class="flex-1 btn btn-outline">Cancel</button>
                <button @click="createWatchlist" class="flex-1 btn btn-primary">Create</button>
            </div>
        </div>
    </div>

    <!-- Rename Modal similar to create -->
    <div v-if="showRenameListModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
        <div class="rounded-2xl p-6 w-full max-w-sm border shadow-2xl" style="background-color: var(--nova-bg-elevated); border-color: var(--nova-border)">
            <h3 class="text-xl font-bold mb-4" style="color: var(--nova-text)">Rename Watchlist</h3>
            <input 
                v-model="renamingListName"
                type="text" 
                class="w-full border rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2"
                 style="background-color: var(--nova-bg); color: var(--nova-text); border-color: var(--nova-border); --tw-ring-color: var(--nova-accent)"
                @keyup.enter="saveRenameList"
            >
            <div class="flex gap-3">
                <button @click="showRenameListModal = false" class="flex-1 btn btn-outline">Cancel</button>
                <button @click="saveRenameList" class="flex-1 btn btn-primary">Save</button>
            </div>
        </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import Api from "@/Api";
import { WatchlistModel } from "@/models/WatchlistModel";
import NavigationBar from "@/components/NavigationBar.vue";
import WatchlistCard from "@/components/WatchlistCard.vue";

const router = useRouter();
const api = Api.getInstance();
const model = reactive(new WatchlistModel(api));

// UI State
const symbolSearch = ref("");
const showCreateListModal = ref(false);
const showRenameListModal = ref(false);
const newListName = ref("");
const renamingListName = ref("");

// Sorting
const sortKey = ref("symbol"); // symbol, trendScore, earningsDate, change
const sortDesc = ref(false);

onMounted(async () => {
  await model.init();
  if (model.portfolios.length > 0) {
      // If we don't have a current one set (default 0), pick first
      const defaultP = model.portfolios.find(p => p.id === model.currentPortfolioId) || model.portfolios[0];
      if (defaultP) {
        await model.selectPortfolio(defaultP.id);
      }
  }
});

function selectPortfolio(id: number) {
    model.selectPortfolio(id);
}

const sortedAnalyzers = computed(() => {
    let items = [...model.analyzers];
    return items.sort((a, b) => {
        let valA: any, valB: any;

        if (sortKey.value === 'symbol') {
            valA = a.s.underlying_symbol;
            valB = b.s.underlying_symbol;
        } else if (sortKey.value === 'trendScore') {
            valA = a.healthScore;
            valB = b.healthScore;
        } else if (sortKey.value === 'earningsDate') {
            valA = a.s.earnings_date || "9999-99-99";
            valB = b.s.earnings_date || "9999-99-99";
        } else if (sortKey.value === 'change') {
            valA = a.s.unrealized_pl_percent;
            valB = b.s.unrealized_pl_percent;
        }

        if (valA < valB) return sortDesc.value ? 1 : -1;
        if (valA > valB) return sortDesc.value ? -1 : 1;
        return 0;
    });
});

const addSymbol = async () => {
    if (!symbolSearch.value) return;
    await model.addSymbolToWatchlist(symbolSearch.value.toUpperCase(), model.currentPortfolioId);
    symbolSearch.value = "";
};

const createWatchlist = async () => {
    if (!newListName.value) return;
    const success = await model.createWatchlist(newListName.value);
    if (success) {
        showCreateListModal.value = false;
        newListName.value = "";
        // Select the new one (model should set it, but we can ensure)
        if (model.portfolios.length > 0) {
             const latest = model.portfolios[model.portfolios.length - 1]; // Assuming appended
             // createWatchlist impl selects it via result.id
        }
    }
};

const openRenameModal = () => {
    const current = model.portfolios.find(p => p.id === model.currentPortfolioId);
    if (current) {
        renamingListName.value = current.name;
        showRenameListModal.value = true;
    }
};

const saveRenameList = async () => {
    if (!renamingListName.value) return;
    const success = await model.renameWatchlist(model.currentPortfolioId, renamingListName.value);
    if (success) {
        showRenameListModal.value = false;
    }
};

const deleteCurrentList = async () => {
    if (confirm("Are you sure you want to delete this watchlist?")) {
        await model.deleteWatchlist(model.currentPortfolioId);
    }
};

const goToStock = (symbol: string) => {
    router.push(/${symbol}/ticker);
};

</script>

<style scoped>
.active-tab {
    background-color: var(--nova-accent);
    color: var(--nova-text-inverse);
    box-shadow: var(--nova-shadow-sm);
}
.inactive-tab {
    color: var(--nova-text-muted);
}
.inactive-tab:hover {
    color: var(--nova-text);
    background-color: var(--nova-bg-elevated);
}
.hover-bg-alt:hover {
    background-color: var(--nova-bg-alt);
}
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>