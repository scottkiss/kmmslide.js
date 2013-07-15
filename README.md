## kmmslide: Simple javascript slider plugin

## Useage

* use as global variable

```js
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="kmmslide.js"></script>
 kmmslide.init({
	      target : 'targetDiv',
		   width : 1600,
		   height : 400,
		   speed : 4000,
		   pics : [
		     {
			     pic:'images/1.jpg',
				  url:'http://wowboo.com/'
			 },
			  {
			     pic:'images/2.jpg',
				  url:'http://wowboo.com/'
			 },
			 {
			    pic:'images/3.jpg',
				 url:'http://wowboo.com/'
			 }
		   ]
	   });

```
* use as an AMD module

```js
<script type="text/javascript" src="require.js"></script>
<script type="text/javascript">
	   require(["kmmslide"],function(kmmslide){
		     kmmslide.init({
	        target : 'targetDiv',
		     width : 1600,
		     height : 400,
		     pics : [
		       {
			        pic:'images/1.jpg',
				     url:'http://wowboo.com/'
			    },
			    {
			        pic:'images/2.jpg',
				     url:'http://wowboo.com/'
			    },
			    {
			        pic:'images/3.jpg',
				     url:'http://wowboo.com/'
			     }
		       ]
	      });
	   
	   });
	</script>

```
More usage please see demo folder

## License

(The MIT License)

Copyright (c) 2012-2013 sk &lt;skkmvp@hotmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.