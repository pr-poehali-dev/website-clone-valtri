import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Document {
  id: number;
  name: string;
  type: string;
  size: string;
  url: string;
  description?: string;
  uploadedAt?: string;
}

interface DocumentViewerProps {
  documents: Document[];
  onDocumentUpload?: (file: File) => void;
}

export function DocumentViewer({ documents, onDocumentUpload }: DocumentViewerProps) {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onDocumentUpload) {
      setUploadFile(file);
      onDocumentUpload(file);
    }
  };

  const formatFileSize = (bytes: string) => {
    return bytes; // Already formatted in the data
  };

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return 'FileText';
      case 'doc':
      case 'docx':
        return 'FileText';
      case 'xls':
      case 'xlsx':
        return 'Table';
      case 'jpg':
      case 'jpeg':
      case 'png':
        return 'Image';
      default:
        return 'File';
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="all">Все документы</TabsTrigger>
            <TabsTrigger value="pdf">PDF</TabsTrigger>
            <TabsTrigger value="images">Изображения</TabsTrigger>
            <TabsTrigger value="other">Другие</TabsTrigger>
          </TabsList>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Icon name="Upload" className="h-4 w-4 mr-2" />
                Загрузить документ
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Загрузить новый документ</DialogTitle>
                <DialogDescription>
                  Выберите файл для загрузки в галерею проекта
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="file">Файл</Label>
                  <Input
                    id="file"
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                  />
                  <p className="text-xs text-muted-foreground">
                    Поддерживаются форматы: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG
                  </p>
                </div>
                {uploadFile && (
                  <div className="p-4 border rounded-lg bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <Icon name={getFileIcon(uploadFile.type)} className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-medium">{uploadFile.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(uploadFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <TabsContent value="all">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <DocumentCard 
                key={doc.id} 
                document={doc} 
                onSelect={setSelectedDocument} 
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pdf">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents
              .filter(doc => doc.type.toLowerCase() === 'pdf')
              .map((doc) => (
                <DocumentCard 
                  key={doc.id} 
                  document={doc} 
                  onSelect={setSelectedDocument} 
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="images">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents
              .filter(doc => ['jpg', 'jpeg', 'png'].includes(doc.type.toLowerCase()))
              .map((doc) => (
                <DocumentCard 
                  key={doc.id} 
                  document={doc} 
                  onSelect={setSelectedDocument} 
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="other">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents
              .filter(doc => !['pdf', 'jpg', 'jpeg', 'png'].includes(doc.type.toLowerCase()))
              .map((doc) => (
                <DocumentCard 
                  key={doc.id} 
                  document={doc} 
                  onSelect={setSelectedDocument} 
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Document Preview Dialog */}
      <Dialog open={!!selectedDocument} onOpenChange={() => setSelectedDocument(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedDocument?.name}</DialogTitle>
            <DialogDescription>
              {selectedDocument?.type} • {selectedDocument?.size}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <Icon name={getFileIcon(selectedDocument?.type || '')} className="h-16 w-16 text-muted-foreground mx-auto" />
                <div>
                  <p className="font-medium">{selectedDocument?.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Предварительный просмотр недоступен
                  </p>
                </div>
                <div className="flex space-x-2 justify-center">
                  <Button variant="outline" size="sm">
                    <Icon name="Eye" className="h-4 w-4 mr-2" />
                    Открыть в новой вкладке
                  </Button>
                  <Button size="sm">
                    <Icon name="Download" className="h-4 w-4 mr-2" />
                    Скачать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface DocumentCardProps {
  document: Document;
  onSelect: (document: Document) => void;
}

function DocumentCard({ document, onSelect }: DocumentCardProps) {
  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return 'FileText';
      case 'doc':
      case 'docx':
        return 'FileText';
      case 'xls':
      case 'xlsx':
        return 'Table';
      case 'jpg':
      case 'jpeg':
      case 'png':
        return 'Image';
      default:
        return 'File';
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => onSelect(document)}>
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name={getFileIcon(document.type)} className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm truncate">{document.name}</CardTitle>
            <CardDescription className="text-xs">
              <Badge variant="secondary" className="mr-2">
                {document.type.toUpperCase()}
              </Badge>
              {document.size}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Icon name="Eye" className="h-4 w-4 mr-2" />
            Просмотр
          </Button>
          <Button size="sm" className="flex-1">
            <Icon name="Download" className="h-4 w-4 mr-2" />
            Скачать
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default DocumentViewer;