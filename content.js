// Find the global search form by its class, so we can get it on any page,
// then modify the action to exclude non-cooksillustrated.com sources.
var forms = document.getElementsByClassName('atkGlobalSearch');
for (var i = 0, l = forms.length; i < l; i++) {
  forms[i].action = '/search?dFR[search_site_list][0]=cio&fR[search_cookbook_collection][0]=false';
}