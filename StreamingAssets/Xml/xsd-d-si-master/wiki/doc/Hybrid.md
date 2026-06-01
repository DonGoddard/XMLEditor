## 8. Structure for non-SI units (hybrid)

<img alt="D-SI-Image-8.1" width="600" style="border-width:10" src="wiki/doc/D-SI-8.1.PNG" /></a>
---
<img alt="D-SI-Image-8.2" width="600" style="border-width:10" src="wiki/doc/D-SI-8.2.PNG" /></a>
---
<img alt="D-SI-Image-8.3" width="600" style="border-width:10" src="wiki/doc/D-SI-8.3.PNG" /></a>

<details><summary><strong>Show full XML example</strong></summary>

```xml

<si:hybrid>
	<!-- A: length from B converted to SI -->
	<si:real>
		<si:value>0.3048006</si:value>
		<si:unit>\metre</si:unit>
	</si:real>
	<!-- B: length with imperial unit foot -->
	<si:real>
		<si:value>1</si:value>
		<si:unit>ft(U.S. survey)</si:unit>
	</si:real>
</si:hybrid>

```

</details>

---
<img alt="D-SI-Image-8.4" width="600" style="border-width:10" src="wiki/doc/D-SI-8.4.PNG" /></a>
---
<img alt="D-SI-Image-8.5" width="800" style="border-width:10" src="wiki/doc/D-SI-8.5.PNG" /></a>

<details><summary><strong>Show full XML example</strong></summary>

```xml

<si:hybrid>
	<!-- A: list from B converted to SI -->
	<si:realList>
		<si:real>
			<si:value>0.00454609</si:value>
			<si:unit>\metre\tothe{3}</si:unit>
		</si:real>
		<si:real>
			<si:label>hardness Rockwell C scale</si:label>
			<si:value>63.00</si:value>
			<si:unit>\metre\metre\tothe{-1}</si:unit>
			<si:expandedUnc>
				<si:uncertainty>1.56</si:uncertainty>
				<si:coverageFactor>2</si:coverageFactor>
				<si:coverageProbability>0.95</si:coverageProbability>
			</si:expandedUnc>
		</si:real>
	</si:realList>
	<!-- B: list with non-SI units -->
	<si:realList>
		<si:real>
			<si:value>1</si:value>
			<si:unit>gallon(U.K.)</si:unit>
		</si:real>
		<si:real>
			<si:label>hardness Rockwell C scale</si:label>
			<si:value>63.00</si:value>
			<si:unit>HRC</si:unit>
			<si:expandedUnc>
				<si:uncertainty>1.56</si:uncertainty>
				<si:coverageFactor>2</si:coverageFactor>
				<si:coverageProbability>0.95</si:coverageProbability>
			</si:expandedUnc>
		</si:real>
	</si:realList>
</si:hybrid>

```

</details>

---

[**Previous Chapter 7 <<**](wiki/doc/ComplexList.md) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    [**Home**](wiki/d-si-online-guide.md)


<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This documentation is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
