Here contains slides based on [Slidev](https://sli.dev/).
- cd `hacking-hackathons`
- `pnpm install`
- ` npx slidev`
- visit http://localhost:3030

### to deploy 
- Export static & deploy to Github pages
- setup base url so root index.html & sub routes will work
- Target = https://fractaldotbox.github.io/talks/
- `npx slidev build --base /talks/hacking-hackathons/dist`