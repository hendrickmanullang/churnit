# ChurnIt
Created by [Hendrick Manullang](https://github.com/diplobrat), [Max Wang](https://github.com/jlmaxwang), [Todd Evans](https://github.com/tomiev), and [Alex Wade](https://github.com/AlexWade555) as part of [Le Wagon](https://www.lewagon.com/) bootcamp.

ChurnIt is best viewed on Desktop [http://www.churnit.me/](http://www.churnit.me/)

This webapp was created for seasoned credit card [churners](https://www.reddit.com/r/churning/) looking to quickly compare credit card offers (AUS). All credit card specs are based on data made pubclicly available by [Finder](https://www.finder.com.au/credit-cards) (last updated 18 Mar 2022).

# Main Features
<br>
Navigate through the app by clicking the purple nav buttons
<br>

![Main Page Scrolling Preview](/app/assets/images/mainPageScroll.gif?raw=true "Main Page Scrolling Preview")

<br>
<br>
Sort your credit card perk preference with by drag & drop
<br>

![Drag & Drop Card preference](/app/assets/images/dragAndDrop.gif?raw=true "Drag and Drop Card Preference")

<br>
<br>
Select a card to compare against a list of recommendations
<br>

![Select a card](/app/assets/images/loadingScreen.gif?raw=true "Select a card")

<br>
<br>
Compare cards and view alternatives
<br>

![Compare cards and select alternatives](/app/assets/images/compareCards.gif?raw=true "Compare cards and select alternatives")

<br>
<br>
View all cards in database and sort at a macro level
<br>

![View all cards and sort at a macro level](/app/assets/images/cardSort.gif?raw=true "View all cards and sort at a macro level")

# Setup
Clone repo
<pre><code>gh repo clone diplobrat/churnit</code></pre>
Run bundle
<pre><code>bundle install</code></pre>
Set up active records & run seed file
<pre><code>rails db:create db:migrate db:seed</code></pre>
Run server on local host (type in http://localhost:3000/ into your browser and Hack away!)
<pre><code>rails s</code></pre>
Make changes to the seed file
<pre><code>code lib/seeds/credit_card_info.csv</code></pre>

# Tech/Frameworks Used

Framework
* Rails

Front-end
* Ruby
* Javascript
* HTML/CSS

Gems/Libraries
* [Sortable.js](https://github.com/SortableJS/Sortable)
* [fullPage.js](https://github.com/alvarotrigo/fullPage.js/)
* [isotope.js](https://github.com/metafizzy/isotope)

Hosted on
* Heroku

# Demo Day Pitch
[https://youtu.be/dOQJFUByH9M?t=969](https://www.youtube.com/watch?v=1RnXYYraiQc)

# Future Considerations #

- [ ] Automate database update process
- [ ] Mobile port
- [ ] Open Banking API connectivity for spending analysis
- [ ] User dashboard
- [ ] Calendar integration
