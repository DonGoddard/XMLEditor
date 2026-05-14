
using System.Xml.Linq;

namespace Nexus.Tests;

public class Xml2Xaml
{
	public static void ConvertXML2XAML(string xmlpath, string xamlpath)
	{
		try
		{
			// Load XML
			XDocument xmlDoc = XDocument.Load(xmlpath);

			// Example: Wrap XML content into a XAML <Grid>
			XElement xamlRoot = new XElement("Grid",
				new XAttribute(XNamespace.Xmlns + "x", "http://schemas.microsoft.com/winfx/2006/xaml"),
				xmlDoc.Root // Embed original XML
			);

			// Save as XAML
			xamlRoot.Save(xamlpath);
		}
		catch (Exception ex)
		{
			String s = ex.Message;
			//Console.WriteLine($"Error: {ex.Message}");
		}
	}
}
