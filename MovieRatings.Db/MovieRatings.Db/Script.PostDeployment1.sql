/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/
MERGE INTO Movies AS Target
USING (VALUES 
	(1, "Snatch", 2002, 115),
	(2, "Pulp Fiction", 1994, 154)
)
AS Source (Id, Title, Year, RunningMinutes)
ON Target.Id = Source.Id
WHEN NOT MATCHED BY TARGET THEN
INSERT (Title, Year, RunningMinutes)
VALUES (Title, Year, RunningMinutes);