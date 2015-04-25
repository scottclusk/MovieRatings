
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 04/25/2015 09:21:32
-- Generated from EDMX file: C:\git\MovieRatings.Core\MovieRatingsDataModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_Cast_ToMovies]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Cast] DROP CONSTRAINT [FK_Cast_ToMovies];
GO
IF OBJECT_ID(N'[dbo].[FK_Ratings_ToMovies]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Ratings] DROP CONSTRAINT [FK_Ratings_ToMovies];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Cast]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Cast];
GO
IF OBJECT_ID(N'[dbo].[Movies]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Movies];
GO
IF OBJECT_ID(N'[dbo].[Ratings]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Ratings];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Casts'
CREATE TABLE [dbo].[Casts] (
    [MovieId] int  NOT NULL,
    [ActorName] nchar(30)  NOT NULL
);
GO

-- Creating table 'Movies1'
CREATE TABLE [dbo].[Movies1] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Title] nchar(50)  NULL,
    [Year] nchar(10)  NULL,
    [RunningMinutes] decimal(3,0)  NULL
);
GO

-- Creating table 'Ratings'
CREATE TABLE [dbo].[Ratings] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [MovieId] int  NOT NULL,
    [Rating1] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [MovieId], [ActorName] in table 'Casts'
ALTER TABLE [dbo].[Casts]
ADD CONSTRAINT [PK_Casts]
    PRIMARY KEY CLUSTERED ([MovieId], [ActorName] ASC);
GO

-- Creating primary key on [Id] in table 'Movies1'
ALTER TABLE [dbo].[Movies1]
ADD CONSTRAINT [PK_Movies1]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Ratings'
ALTER TABLE [dbo].[Ratings]
ADD CONSTRAINT [PK_Ratings]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [MovieId] in table 'Casts'
ALTER TABLE [dbo].[Casts]
ADD CONSTRAINT [FK_Cast_ToMovies]
    FOREIGN KEY ([MovieId])
    REFERENCES [dbo].[Movies1]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [MovieId] in table 'Ratings'
ALTER TABLE [dbo].[Ratings]
ADD CONSTRAINT [FK_Ratings_ToMovies]
    FOREIGN KEY ([MovieId])
    REFERENCES [dbo].[Movies1]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Ratings_ToMovies'
CREATE INDEX [IX_FK_Ratings_ToMovies]
ON [dbo].[Ratings]
    ([MovieId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------