import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },
  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },
  async revalidateCache(requests) {
    const response = await caches.match(requests);

    if (response) {
      this._fetchRequest(requests);
      return response;
    }
    return this._fetchRequest(requests);
  },
  async _openCache() {
    return caches.open('');
  },
  async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(request);
    return response;
  },

  async _addCache(request) {
    const cache = await this._openCache(CONFIG.CACHE_NAME);
    cache.add(request);
  },
};

export default CacheHelper;
