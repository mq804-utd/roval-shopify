# UTD Slate v0 Prototype

You can **learn more about slate v0 settings** and commands in this official documentation:
https://shopify.github.io/slate.shopify.com/docs/0.14.0/

### Basic commands:
1) **slate zip** - performs a fresh build of your theme and zips it into a file that’s compatible with Shopify, that you can upload a ZIP-archive to the your store.

2) **slate start** - Performs a full deploy of your theme and starts the watchers (see slate watch).

**OPTIONS**: *-e, --env* - deploy to a specific environment. For example (**slate watch -e staging**).

3) **slate watch** - Sets up the watchers for all theme assets and deploys the compiled versions to your specified environment (default is development). Also opens a Browsersync window with live reloading after changing and saving a file.

**OPTIONS**:*-e, --env* - deploy to a specific environment. For example (**slate watch -e staging**).

#### Theme download
Slate by default, not have a command for download themes from Shopify store. But, you can use default **Shopify Theme Kit**(https://shopify.github.io/themekit/) command:
**theme download** - it will download the entire theme.

**OPTIONS**:

* *-e, --env* - download a specific theme;  For example (**theme download -e staging**).
* *-d* - select a folder, when you will download the theme files. For example (**theme download -d src**).