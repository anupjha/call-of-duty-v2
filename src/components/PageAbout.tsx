export default function PageAbout() {
  return (
    <div class="px-4">
      <div class="layout-center">
        <div class="h-12 py-4">
          <h2 class="">About</h2>
        </div>

        <div class="py-4">
          <p>Since data is stored in localStorage, the main thread gets blocked, and there is a 5MB size limit.</p>
        </div>
        <div class="py-4">
          <h3>Features</h3>
        </div>
        <div class="py-4">
          <ul class="py-2 pl-8">
            <li>Create boards</li>
            <li>Create lists</li>
            <li>Create cards</li>
            <li>Rename items</li>
            <li>Sort items by Drag and Drop</li>
          </ul>
          <p>Additional features:</p>
          <ul class="py-2 pl-8">
            <li>Light Mode / Dark Mode</li>
            <li>Import / Export</li>
            <li>Work offline</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
