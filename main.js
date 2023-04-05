// Function to save an item
async function saveItem(item) {
  try {
    // Get the saved items from the local storage
    const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

    savedItems.push(item);

    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    // alert user about the saved items
    alert(
      `${item} saved successfully! You have ${savedItems.length} items in your "Save for Later" folder.`
    );
  } catch (error) {
    console.log(error);
  }
}
async function showSavedItems() {
  try {
    // Get the saved items and likes from the local storage
    const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    const savedLikes = JSON.parse(localStorage.getItem("savedLikes")) || [];
    // Open the saved items page in a new window
    const savedItemsWindow = window.open();

    savedItemsWindow.document.write(`
      <h1>Your Saved Items:</h1>
      <ul>${savedItems
        .map(
          (item) => `
          <li>${item} 
            <button onclick="saveLike('${item}')">
              ${savedLikes.includes(item) ? "Liked" : "Like"}
            </button>
          </li>`
        )
        .join("")}
        //create a new form to
      </ul>
      <form>
        <label for="comment">Add Comment:</label><br>
        <input type="text" id="comment" name="comment"><br>
        <button type="button" onclick="saveCommentAndShowMessage(document.getElementById('comment').value)">Save Comment</button>
      </form>
      <form>
        <label for="message">Send Message:</label><br>
        <input type="text" id="message" name="message"><br>
        <button type="button" onclick="sendMessageAndShowMessage(document.getElementById('message').value)">Send Message</button>
      </form>
    `);

    // Define a function to display the success message
    function showMessage(message) {
      alert(message);
    }

    // Define a function to save a comment and display the success message
    async function saveCommentAndShowMessage(comment) {
      try {
        const savedComments =
          JSON.parse(localStorage.getItem("savedComments")) || [];
        savedComments.push(comment);
        localStorage.setItem("savedComments", JSON.stringify(savedComments));
        showMessage(
          `Comment saved successfully! You have ${savedComments.length} comments.`
        );
      } catch (error) {
        console.log(error);
      }
    }

    // Define a function to send a message and display the success message
    async function sendMessageAndShowMessage(message) {
      try {
        const savedMessages =
          JSON.parse(localStorage.getItem("savedMessages")) || [];
        savedMessages.push(message);
        localStorage.setItem("savedMessages", JSON.stringify(savedMessages));
        showMessage(
          `Message sent successfully! You have ${savedMessages.length} messages.`
        );
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
