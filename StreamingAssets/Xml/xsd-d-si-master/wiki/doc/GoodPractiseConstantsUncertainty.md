## Good Practise: Uncertainty of Constants

This Good Practise example shows ways how to evaluate the uncertainty for constants in the D-SI, where the value of the constant is rounded to a finite number of digits. As an example, the value of the constant PI is considered. The representation of the value of PI in a digital system is typically a rounded value.

### D-SI principle of representing rounding errors as uncertainty
The error in rounding a mathematical constant to a finite number of decimal places should be represented by an "uncertainty".  In this way, the uncertainty can be defined as the standard deviation of a rectangular distribution that contains the exact value of the constant with 100% probability. <br/>
The user is free to define any rectangular distribution for the "uncertainty" of the rounding error as long as the statement meets the requirement above. It would for example allow very rought estimates of the uncertainty to be made. This is outlined below for the value of PI:

```xml
<si:constant>
    <si:value>3.14</si:value>
    <si:unit>\one</si:unit>
    <si:uncertainty>1</si:uncertainty>
    <si:distribution>rectangular</si:distribution>
<si:constant>
```
As this is not very practical, two methods are presented below that may be more useful when looking for a more accurate assessment of the rounding error by uncertainty.

### Uncertainty for constants from "half-even rounding"
The "half-even" rounding method (sometimes called Bankers rounding) has the smallest rounding error among all rounding methods and so is a good example for good practise. The five steps below outline the application of this rounding method for PI with rounding to two digits after the decimal point.

1.) Round the value of PI to two digits after the decimal point with the rounding method "half even" (number decimal places n=2) gives 3.14.

2.) Calculating the maximum rounding error with the formula err = 0.5 * 10^{-n} = 0.005 (other rounding methods than the "half-even" procedure have error 10^{-n}.)

3.) The interval I = [3.14 - 0.005, 3.14 + 0.005] contains the correct value of PI with 100% probability.

4.) Interpretation of the interval as a rectangular distribution and calculation of the standard uncertainty u= err / sqrt{3} gives a value a little less than 0.003. Thus, using 0.003 as the value of standard uncertainty is a valid choice.

5.) A trailing zero is added to the rounded value of PI giving 3.140 to have the same amount of significant decimal places for value and the standard uncertainty. Writing the data to XML gives:

```xml
<si:constant>
    <si:value>3.140</si:value>
    <si:unit>\one</si:unit>
    <si:uncertainty>0.003</si:uncertainty>
    <si:distribution>rectangular</si:distribution>
<si:constant>
```

### Uncertainty for constants stored in differing precision formats

If a more precise assessment of the rounding error is needed, this good practise guideline considers the comparison of the constants stored in differing precision formats. In the calculation below this is outlined by the evaluation of the accuracy of PI in single precision floating point format compared to PI in double precision floating point format. All calculations in this example were implemented in a simple JAVA program.

1.) Construct a single precision and double precision value for PI. Then, calculate the difference of both values in double precision arithmetic:
  * PI single precision:  3.1415927
  * Difference to double: 8.742278012618954E-8

2.) By setting d = 8.742278012618954E-8, we have defined the half width of an interval that would cover the value of PI.

3.) Calculate the standard uncertainty for coverage interval that is 5.0473565639161E-8 in double precision arithmetic.

4.) Optional rounding up of the standard uncertainty value to two significant digits gives u = 5.1E-8 and adding trailing zeros to the single precision value according to the number of decimal places of the uncertainty gives the XML constant:

```xml
<si:constant>
    <si:value>3.141592700</si:value>
    <si:unit>\one</si:unit>
    <si:uncertainty>0.000000051</si:uncertainty>
    <si:distribution>rectangular</si:distribution>
<si:constant>
```

---

[**Back to Home**](wiki/d-si-online-guide.md)


<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This documentation is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.


