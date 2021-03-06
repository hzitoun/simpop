# Simpop
A simple html 5 popup

## Usage 

- Add the following HTML 5 component to your page in order to initialize the popup

  ```html
  <simpop 
      id="popupid" 
	  text="popup body comes here" 
	  title="Popup Title" 
	  onconfirm="fnOnConfirm();" 
	  oncancel="var msg = 'canceled'; alert(msg);" 
	  height="120" 
	  width="400" 
	  resizable="true" 
	  class = "cssClass"/>

  ```

- import the simpop script

  ```html
  <script src="js/lib/simpop.min.js"></script>
  ```

- Open it (when clicking on a button for example)
   ```html
  <button onclick="popupid.open();"></button>
   ```


## Configs

* `id`: DOM ID used to open the popup (required)
* `title`:  title of the popup (optional)
* `text`:  the body of the popup (optional)
* `onconfirm`: JS code to be executed when the confirm button is clicked (optional)
* `oncancel`: JS code to be executed when the cancel button is clicked (optional)
* `confirmbtn`:  label of confirm button; default is 'Yes' (optional)
* `canelbtn`: label of the cancel button; default is 'No' (optional)
* `height`: height (optional)
* `width`: width (optional)
* `resizable` : true/false (optional)


Notice that [jquery ui](https://jqueryui.com/) is required!




