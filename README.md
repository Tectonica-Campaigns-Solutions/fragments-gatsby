## Query fragments to use in any gatsby project using https://www.npmjs.com/package/tectonica-components

1. Download repo as zip

2. copy fragments.js from the repo to any folder inside /src in gatsby project. (recommended placing the file inside some folder called 'fragments' for example)

3. use the fragment for query all the fields of any datocms block library


```
... on DatoCmsNarrativeBlock{
  ...BlockNarrativeBlock
}
```
